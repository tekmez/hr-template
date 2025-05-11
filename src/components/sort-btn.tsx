import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

interface SortBtnProps<TData> {
  column: Column<TData>;
  label: string;
}

export function SortBtn<TData>({ column, label }: SortBtnProps<TData>) {
  return (
    <div className="flex items-center gap-2">
      {label}
      <span
        className="text-xs cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        aria-label={`Sort by ${column.id}`}
      >
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
        {column.getIsSorted() === "asc" && <ArrowUp size={16} />}
        {column.getIsSorted() === "desc" && <ArrowDown size={16} />}
      </span>
    </div>
  );
}
