import { flexRender, type Table as TableType } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableToolbar from "./table-toolbar";
import TablePagination from "./table-pagination";
import TableHeader from "./table-header";
import { useTableContext } from "@/context/table-context";

export function DataTable() {
  const { table } = useTableContext();

  return (
    <div className="w-full">
      {/* Input, Dropdown, Button etc. Header */}
      <TableToolbar table={table as TableType<unknown>} />
      {/* Table */}
      <div className="rounded-md border bg-black">
        <Table>
          {/* Table Header */}
          <TableHeader table={table as TableType<unknown>} />
          {/* Table Body */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`${
                    row.getIsSelected() ? "bg-white" : "text-white"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center text-white"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <TablePagination table={table as TableType<unknown>} />
    </div>
  );
}
