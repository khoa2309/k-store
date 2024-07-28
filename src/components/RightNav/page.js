import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { MyDropdownMenu } from "../DropdownMenu/page";
import { BellRing, HelpCircleIcon } from "lucide-react";

export function RightNav({ className, ...props }) {
    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            <ModeToggle />
            <span className="flex items-center gap-1 cursor-pointer hover-nav">
                <BellRing width={18} height={18} />
                Thông báo
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover-nav">
                <HelpCircleIcon width={18} height={18} />
                Trợ giúp
            </span>
            <MyDropdownMenu />
        </nav>
    );
}
