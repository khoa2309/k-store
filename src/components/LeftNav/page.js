import Link from "next/link";

import { cn } from "@/lib/utils";
import { Facebook, Instagram } from "lucide-react";
import { MyHoverCard } from "../HoverNav/page";

export function LeftNav({ className, ...props }) {
    return (
        <nav className={cn("flex items-center gap-3", className)} {...props}>
            <MyHoverCard />
            <span className="flex items-center gap-2">
                Kết nối{" "}
                <a
                    href="https://www.facebook.com/khoa1midside/"
                    className="hover-nav"
                    target="_blank"
                >
                    <Facebook width={18} height={18} />
                </a>
                <a
                    href="https://www.instagram.com/khoa_infp/"
                    className="hover-nav"
                    target="_blank"
                >
                    <Instagram width={18} height={18} />
                </a>
            </span>
        </nav>
    );
}
