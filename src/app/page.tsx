"use client";

import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Client, createColumns } from "@/components/data-table/columns";
import { Header } from "./(components)/header";
import { SearchSection } from "./(components)/search-section";
import { TableSection } from "./(components)/table-section";
import { ClientModal } from "./(components)/client-modal";

import clientsData from "@/data/clients.json";
import "./fonts.css";

const LOADING_DELAY = 1000;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    return () => clearTimeout(timer);
  }, []);

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
    data: clientsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters },
  });

  const handleSearch = () => {
    table.getAllColumns().forEach((column) => {
      column.setFilterValue(undefined);
    });

    if (searchValue) {
      table.getColumn(selectedFilter)?.setFilterValue(searchValue);
    }
  };

  useEffect(() => {
    table.getColumn("status")?.setFilterValue(selectedStatusFilter || "");
  }, [selectedStatusFilter, table]);

  return (
    <div className="min-h-screen bg-neutral-carbon">
      <Header />
      <main className="px-4 py-6 md:px-20 md:py-[30px]">
        <div className="container mx-auto flex flex-col gap-y-[30px]">
          <SearchSection
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            handleSearch={handleSearch}
          />
          <TableSection isLoading={isLoading} table={table} />
        </div>
      </main>
      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={selectedClient}
      />
    </div>
  );
}
