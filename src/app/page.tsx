"use client";

import { useState } from "react";
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

import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import wave from "@/images/logo.svg";
import user from "@/images/user-circle.svg";
import data from "@/data/clients.json";

export default function Home() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

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
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              table.getColumn("email")?.setFilterValue(event.target.value);
            }}
          />

          <Select defaultValue="name">
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

          <Button variant="primary" className="w-[120px]">
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
              visiblePages={5}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
