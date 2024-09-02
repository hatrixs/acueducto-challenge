import { Table } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table/data-table";
import { Pagination } from "@/components/ui/pagination";
import { Client } from "@/components/data-table/columns";
import { LoadingSkeleton } from "./loading-skeleton";

interface TableSectionProps {
  isLoading: boolean;
  table: Table<Client>;
}

export function TableSection({ isLoading, table }: TableSectionProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#374151]">
      {isLoading ? <LoadingSkeleton /> : <DataTable table={table} />}
      <div className="flex justify-center py-4">
        {!isLoading && (
          <Pagination
            totalPages={table.getPageCount()}
            currentPage={table.getState().pagination.pageIndex + 1}
            onPageChange={(page) => table.setPageIndex(page - 1)}
            visiblePages={3}
          />
        )}
      </div>
    </div>
  );
}
