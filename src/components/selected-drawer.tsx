import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import DrawerBody from "./drawer-body";

const SelectedDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Selected List</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <DrawerBody />
        </div>
        <DrawerFooter>
          <Button variant="destructive">Clear List</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SelectedDrawer;
