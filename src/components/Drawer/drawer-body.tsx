import { useTableContext } from "@/context/table-context";
import { type Employee } from "@/types/types";
import { Separator } from "../ui/separator";
import { Trash2 } from "lucide-react";
import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const DrawerBody = () => {
  const { rowSelection, allEmployees, setRowSelection } = useTableContext();
  const parentRef = useRef<HTMLDivElement>(null);

  const selectedEmployeeData = React.useMemo(() => {
    if (!allEmployees) return [];
    return Object.keys(rowSelection)
      .filter((key) => rowSelection[key])
      .map((indexStr) => allEmployees[parseInt(indexStr)])
      .filter((employee): employee is Employee => employee !== undefined);
  }, [allEmployees, rowSelection]);

  const rowVirtualizer = useVirtualizer({
    count: selectedEmployeeData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100, // Toplam yükseklik
    overscan: 5,
  });

  const handleRemoveEmployee = (id: number) => {
    if (!allEmployees) return;
    const rowIndexToDeselect = allEmployees.findIndex(
      (employee) => employee.id === id
    );
    if (rowIndexToDeselect !== -1) {
      const newRowSelection = { ...rowSelection };
      delete newRowSelection[String(rowIndexToDeselect)];
      setRowSelection(newRowSelection);
    }
  };

  if (!allEmployees && selectedEmployeeData.length === 0) {
    return <div className="p-4">No employees selected.</div>;
  }

  return (
    <div
      ref={parentRef}
      className="p-4 max-h-[calc(100vh-10rem)] overflow-y-auto"
    >
      {selectedEmployeeData.length > 0 ? (
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const employee = selectedEmployeeData[virtualItem.index];
            if (!employee) {
              return (
                <div
                  key={virtualItem.key}
                  style={{ height: `${virtualItem.size}px` }}
                ></div>
              );
            }
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                  paddingBottom: "0.75rem",
                }}
              >
                <div className="rounded-lg border bg-card h-full text-card-foreground shadow-sm p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <p className="font-medium">{employee.name}</p>
                      <Separator orientation="vertical" />
                      <p className="text-sm text-muted-foreground">
                        {employee.title}
                      </p>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        {employee.department}
                      </p>
                      <button
                        className="relative p-1 rounded-sm border border-red-500 cursor-pointer self-end mt-auto"
                        aria-label="Remove employee"
                        onClick={() => handleRemoveEmployee(employee.id)}
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-muted-foreground text-center">
          No employees selected.
        </p>
      )}
    </div>
  );
};

export default DrawerBody;
