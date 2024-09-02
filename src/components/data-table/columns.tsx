import Image from "next/image";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import funnel from "@/images/funnel.svg";
import eye from "@/images/eye.svg";
import trash from "@/images/trash.svg";

export type Client = {
  id: number;
  name: string;
  email: string;
  state: string;
  order_number: string;
  status: string;
};

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") {
    return <ChevronUpIcon size={16} className="text-neutral-cloud" />;
  }

  if (isSorted === "desc") {
    return <ChevronDownIcon size={16} className="text-neutral-cloud" />;
  }

  return null;
};

export const createColumns = (
  onOpenModal: (client: Client) => void,
  selectedStatusFilter: string,
  setSelectedStatusFilter: (status: string) => void,
): ColumnDef<Client>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        className="w-full justify-between rounded-none p-0"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <span className="text-neutral-cloud">Nombre</span>
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    accessorKey: "order_number",
    header: "No. de pedido",
  },
  {
    accessorKey: "status",
    header: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="m-auto flex w-[115px] cursor-pointer items-center justify-between">
            <span>Estatus</span>
            <Image src={funnel} alt="funnel" width={14.4} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-3">
          <div className="flex flex-col gap-2">
            {["Enviado", "Pendiente", "Cancelado"].map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox
                  id={status.toLowerCase()}
                  className="bg-neutral-carbon"
                  checked={selectedStatusFilter === status}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedStatusFilter(status);
                    } else {
                      setSelectedStatusFilter("");
                    }
                  }}
                />
                <label
                  htmlFor={status.toLowerCase()}
                  className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {status}
                </label>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      const getVariant = (status: string): BadgeProps["variant"] => {
        switch (status.toLowerCase()) {
          case "enviado":
            return "success";
          case "pendiente":
            return "warning";
          case "cancelado":
            return "danger";
        }
      };

      return (
        <div className="flex justify-center">
          <Badge className="w-[115px]" variant={getVariant(status)}>
            {status}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => (
      <span className="inline-block w-full text-center">Acciones</span>
    ),
    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex items-center justify-center gap-[10px]">
          <Button className="p-0" onClick={() => onOpenModal(client)}>
            <Image src={eye} alt="eye" />
          </Button>
          <Button className="p-0" onClick={() => confirm("Delete row?")}>
            <Image src={trash} alt="trash" />
          </Button>
        </div>
      );
    },
  },
];
