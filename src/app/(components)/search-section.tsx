import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchSectionProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  handleSearch: () => void;
}

export function SearchSection({
  searchValue,
  setSearchValue,
  selectedFilter,
  setSelectedFilter,
  handleSearch,
}: SearchSectionProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-end md:gap-x-[10px]">
      <h1 className="flex-1 text-[32px] font-medium text-[#E0E2EB]">
        Clientes
      </h1>
      <Input
        label="Búsqueda"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown}
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
      <Button variant="primary" className="md:w-[120px]" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
}
