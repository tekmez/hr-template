import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { Employee } from "@/types/types";
import { SortBtn } from "../sort-btn";

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    header: ({ column }) => <SortBtn column={column} label="Name" />,
  },
  {
    accessorKey: "title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
    header: ({ column }) => <SortBtn column={column} label="Title" />,
  },
  {
    accessorKey: "department",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("department")}</div>
    ),
    header: ({ column }) => <SortBtn column={column} label="Department" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortBtn column={column} label="Email" />,
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "location",
    header: ({ column }) => <SortBtn column={column} label="Location" />,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "hiredAt",
    header: "Hired At",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hiredAt")}</div>
    ),
  },
];
