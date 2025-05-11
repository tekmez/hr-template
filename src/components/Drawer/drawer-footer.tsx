import { Button } from "../ui/button";
import { DrawerClose, DrawerFooter } from "../ui/drawer";
import { useTableContext } from "@/context/table-context";
const DrawerBottom = () => {
  const { setRowSelection } = useTableContext();
  return (
    <DrawerFooter>
      <Button
        variant="destructive"
        onClick={() => {
          setRowSelection({});
        }}
      >
        Clear List
      </Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  );
};

export default DrawerBottom;
