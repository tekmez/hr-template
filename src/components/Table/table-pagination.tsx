import { type Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

const TablePagination = <TData,>({ table }: TablePaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-white">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-2 text-white">
        {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
      </div>
      <div className="space-x-2">
        <Button
          size="sm"
          onClick={() => table.previousPage()}
          variant="outline"
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          size="sm"
          onClick={() => table.nextPage()}
          variant="outline"
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
