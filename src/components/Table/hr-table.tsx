import { DataTableDemo } from "./data-table";
import { data } from "@/constants/data";
export default function HrTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTableDemo data={data} />
    </div>
  );
}
