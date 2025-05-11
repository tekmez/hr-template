import SelectedDrawer from "@/components/Drawer/selected-drawer";
import "./index.css";
import Header from "@/components/header";
import HrTable from "@/components/Table/hr-table";
function App() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen py-8 px-12 flex flex-col gap-4">
      <Header />
      <HrTable />
      <SelectedDrawer />
    </div>
  );
}

export default App;
