import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <MobileSidebar />
      <div className="flex items-center gap-x-3">
        <ModeToggle/>
        <Button variant="premium" size="sm">upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2 "/>
        </Button> 
        <UserButton afterSignOutUrl="/" />
      </div>

      
      

    </div>
  );
};
export default Navbar;
