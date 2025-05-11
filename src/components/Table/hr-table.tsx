import { useTableContext } from "@/context/table-context";
import { DataTable } from "./data-table";

export default function HrTable() {
  const { isLoadingEmployees, employeeError } = useTableContext();

  if (isLoadingEmployees)
    return <div className="container mx-auto py-10">Yükleniyor...</div>;
  if (employeeError)
    return <div className="container mx-auto py-10">Hata: {employeeError}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable />
    </div>
  );
}
