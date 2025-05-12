import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import DrawerBody from "./drawer-body";
import { PanelRight } from "lucide-react";
import DrawerBottom from "./drawer-footer";
const SelectedDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        asChild
        className="absolute right-16 bottom-16 rounded-full w-16 h-16"
      >
        <Button variant="outline" size="icon">
          <PanelRight style={{ width: "32px", height: "32px" }} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-black/70 backdrop-blur-sm border-none">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold text-white text-center">
            Selected Employees
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <DrawerBody />
        </div>
        <DrawerBottom />
      </DrawerContent>
    </Drawer>
  );
};

export default SelectedDrawer;
