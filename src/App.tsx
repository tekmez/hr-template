import SelectedDrawer from "@/components/selected-drawer";
import "./index.css";
import Header from "@/components/header";
function App() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen py-8 px-12 flex flex-col gap-4">
      <Header />
      <SelectedDrawer />
    </div>
  );
}

export default App;
