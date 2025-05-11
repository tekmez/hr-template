import { flexRender, type Table } from "@tanstack/react-table";
import { TableRow, TableHeader as Header, TableHead } from "../ui/table";

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

const TableHeader = <TData,>({ table }: TableHeaderProps<TData>) => {
  return (
    <Header>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead className="text-white" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </Header>
  );
};

export default TableHeader;
