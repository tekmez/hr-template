import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import {
  type RowSelectionState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type Table,
} from "@tanstack/react-table";
import { type Employee } from "@/types/types";
import useGetEmployee from "@/hooks/use-get-employee";
import { columns as appColumns } from "@/components/Table/columns";

interface TableContextType {
  table: Table<Employee>;
  rowSelection: RowSelectionState;
  allEmployees: Employee[] | null;
  isLoadingEmployees: boolean;
  employeeError: string | null;
  setRowSelection: (rowSelection: RowSelectionState) => void;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};

interface TableProviderProps {
  children: ReactNode;
}

export const TableProvider = ({ children }: TableProviderProps) => {
  const {
    data: fetchedEmployees,
    loading: isLoadingEmployees,
    error: employeeError,
  } = useGetEmployee();
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const employeesData = useMemo(
    () => fetchedEmployees || [],
    [fetchedEmployees]
  );

  const columns = useMemo(() => appColumns, []);

  const table = useReactTable({
    data: employeesData,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const value = {
    table,
    rowSelection: table.getState().rowSelection,
    allEmployees: fetchedEmployees,
    isLoadingEmployees,
    employeeError,
    setRowSelection,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
