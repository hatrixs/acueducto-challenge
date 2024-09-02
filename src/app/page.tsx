"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Client, createColumns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

import wave from "@/images/logo.svg";
import user from "@/images/user-circle.svg";
import data from "@/data/clients.json";
import "./fonts.css";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("");

  const handleOpenModal = (client: Client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const columns = createColumns(
    handleOpenModal,
    selectedStatusFilter,
    setSelectedStatusFilter,
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleSearch = () => {
    table.getColumn(selectedFilter)?.setFilterValue(searchValue);
  };

  useEffect(() => {
    if (selectedStatusFilter) {
      table.getColumn("status")?.setFilterValue(selectedStatusFilter);
    } else {
      table.getColumn("status")?.setFilterValue("");
    }
  }, [selectedStatusFilter, table]);

  return (
    <div className="min-h-screen bg-neutral-carbon">
      <header className="border-b border-neutral-slate px-4 py-3 md:px-20">
        <div className="container mx-auto flex items-center justify-between">
          <Image src={wave} alt="wave" width={110} className="cursor-pointer" />
          <Avatar className="h-[30px] w-[30px] cursor-pointer">
            <Image src={user} alt="not found" width={30} height={30} />
          </Avatar>
        </div>
      </header>

      <main className="flex flex-col gap-y-[30px] px-4 py-6 md:px-20 md:py-[30px]">
        <div className="flex flex-col gap-y-4 md:flex-row md:items-end md:gap-x-[10px]">
          <h1 className="flex-1 text-[32px] font-medium text-[#E0E2EB]">
            Clientes
          </h1>

          <Input
            label="Búsqueda"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />

          <Select
            defaultValue="name"
            value={selectedFilter}
            onValueChange={setSelectedFilter}
          >
            <SelectTrigger className="md:w-[288px]">
              <SelectValue placeholder="Selecciona un filtro" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="name">Nombre</SelectItem>
                <SelectItem value="email">Correo</SelectItem>
                <SelectItem value="state">Estado</SelectItem>
                <SelectItem value="order_number">No. de pedido</SelectItem>
                <SelectItem value="status">Estatus</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            variant="primary"
            className="md:w-[120px]"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#374151]">
          <DataTable table={table} />

          <div className="flex justify-center py-4">
            <Pagination
              totalPages={table.getPageCount()}
              currentPage={table.getState().pagination.pageIndex + 1}
              onPageChange={(page) => {
                table.setPageIndex(page - 1);
              }}
              visiblePages={3}
            />
          </div>
        </div>
      </main>

      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalContent className="max-w-[calc(100%-2rem)] sm:max-w-[500px] md:max-w-[880px]">
          <ModalHeader>
            <ModalTitle className="font-monument font-normal">
              Detalles de la orden
            </ModalTitle>
          </ModalHeader>
          <ModalBody className="rounded-lg bg-neutral-slate p-5">
            {selectedClient && (
              <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-10">
                <div className="flex flex-col gap-y-[10px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Label className="text-[18px] font-bold text-[#F0F1F5]">
                      Cliente
                    </Label>
                    <span>{selectedClient.name}</span>
                  </div>
                  <div className="flex flex-col gap-y-[10px]">
                    <Label className="text-[18px] font-bold text-[#F0F1F5]">
                      Correo
                    </Label>
                    <span>{selectedClient.email}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Label className="text-[18px] font-bold text-[#F0F1F5]">
                      No. de orden
                    </Label>
                    <span>{selectedClient.order_number}</span>
                  </div>
                  <div className="flex flex-col gap-y-[10px]">
                    <Label className="text-[18px] font-bold text-[#F0F1F5]">
                      Enviado el
                    </Label>
                    <span>23/01/2024 a las 14:02 hrs</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-y-[10px]">
                    <Label className="text-[18px] font-bold text-[#F0F1F5]">
                      Costo
                    </Label>
                    <div className="flex justify-between">
                      <span>Productos</span>
                      <span>$25,850.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Envio</span>
                      <span>$1,032.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>26,882.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="secondary"
              className="md:w-[120px]"
              onClick={() => setIsModalOpen(false)}
            >
              Volver
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
