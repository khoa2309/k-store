import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MyAvatar } from "../Avatar/page";

export function MyDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MyAvatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>Khoa Nguyễn</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <a href="#">
                        <DropdownMenuItem className="cursor-pointer">
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                    </a>
                    <a href="https://github.com/khoa2309" target="_blank">
                        <DropdownMenuItem className="cursor-pointer">
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </DropdownMenuItem>
                    </a>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <a href="#">
                    <DropdownMenuItem className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </a>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
