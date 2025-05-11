import { useTableContext } from "@/context/table-context";
import { type Employee } from "@/types/types";

const DrawerBody = () => {
  const { rowSelection, allEmployees } = useTableContext();

  if (!allEmployees) {
    return <div className="p-4">No employees found.</div>;
  }

  const selectedEmployeeData = Object.keys(rowSelection)
    .filter((key) => rowSelection[key])
    .map((indexStr) => allEmployees[parseInt(indexStr)])
    .filter((employee): employee is Employee => employee !== undefined);

  return (
    <div className="p-4 max-h-[calc(100vh-10rem)] overflow-y-auto">
      {selectedEmployeeData.length > 0 ? (
        <div className="space-y-3">
          {selectedEmployeeData.map((employee) => (
            <div
              key={employee.id}
              className="rounded-lg border bg-card p-3 text-card-foreground shadow-sm"
            >
              <p className="font-medium">{employee.name}</p>
              <p className="text-sm text-muted-foreground">{employee.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No employees selected.</p>
      )}
    </div>
  );
};

export default DrawerBody;
