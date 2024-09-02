import Image from "next/image";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon, Eye, Trash2 } from "lucide-react";
import funnel from "@/images/funnel.svg";
import eye from "@/images/eye.svg";
import trash from "@/images/trash.svg";

type Client = {
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

export const columns: ColumnDef<Client>[] = [
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
      <div className="m-auto flex w-[115px] items-center justify-between">
        <span>Estatus</span>
        <Image src={funnel} alt="funnel" width={14.4} />
      </div>
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
          <Button className="p-0" onClick={() => alert(JSON.stringify(client))}>
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
