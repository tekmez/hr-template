import { DataTable } from "./data-table";
import useGetEmployee from "@/hooks/use-get-employee";
export default function HrTable() {
  const { data, loading, error } = useGetEmployee();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container mx-auto py-10">
      <DataTable data={data || []} />
    </div>
  );
}
