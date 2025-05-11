import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";

export interface TableState {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  columnVisibility: VisibilityState;
  rowSelection: Record<string, boolean>;
}

export interface TableProps<TData> {
  data: TData[];
  onRowSelect?: (selectedRows: TData[]) => void;
}
