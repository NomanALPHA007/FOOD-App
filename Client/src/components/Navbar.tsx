import { Menubar, MenubarTrigger } from "@radix-ui/react-menubar";
import { MenubarMenu, MenubarContent, MenubarItem } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Sun, Moon, ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@radix-ui/react-sheet"; 

const Navbar = () => {
    const admin = true;
    const loading = false;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">FoodTiger</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6"></div>
                    <div className="flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/order/status">Order</Link>
                    </div>
                    {admin && (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Dashboard</MenubarTrigger>
                                <MenubarContent>
                                    <Link to="/admin/restaurant">
                                        <MenubarItem>Restaurant</MenubarItem>
                                    </Link>
                                    <Link to="/admin/menu">
                                        <MenubarItem>Menu</MenubarItem>
                                    </Link>
                                    <Link to="/admin/orders">
                                        <MenubarItem>Order</MenubarItem>
                                    </Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Light</DropdownMenuItem>
                                <DropdownMenuItem>Dark</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Link to="/cart" className="relative cursor-pointer">
                        <ShoppingCart />
                        <Button
                            size="icon"
                            className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500"
                        >
                            5
                        </Button>
                    </Link>
                </div>
                <div>
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    {loading ? (
                        <Button className="bg-orange hover:bg-hoverOrange">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        <Button className="bg-orange hover:bg-hoverOrange">Logout</Button>
                    )}
                </div>
            </div>
            <div>
                {/* Mobile responsive */}
            </div>
        </div>
    );
};

export default Navbar;

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};
