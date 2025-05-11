import { Button } from "../ui/button";
import { DrawerClose, DrawerFooter } from "../ui/drawer";

const DrawerBottom = () => {
  return (
    <DrawerFooter>
      <Button variant="destructive">Clear List</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  );
};

export default DrawerBottom;
