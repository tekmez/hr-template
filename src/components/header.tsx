import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 bg-white/10 rounded-full">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl text-white font-bold">HR Template</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default">Login</Button>
        <Button variant="outline">Signup</Button>
      </div>
    </div>
  );
};

export default Header;
