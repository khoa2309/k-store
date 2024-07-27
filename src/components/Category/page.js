import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { buttonVariants } from "../ui/button";

export function Category({ links, isCollapsed }) {
    return (
        <TooltipProvider>
            <div
                data-collapsed={isCollapsed}
                className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
            >
                <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    {links.map((link, index) =>
                        isCollapsed ? (
                            <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <span
                                        href="#"
                                        className={cn(
                                            buttonVariants({
                                                variant: link.variant,
                                                size: "icon",
                                            }),
                                            "h-9 w-9 font-bold cursor-pointer",
                                            link.variant === "default" &&
                                                "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                                        )}
                                    >
                                        <span className="sr-only">
                                            {link.title}
                                        </span>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                    className="flex items-center gap-4"
                                >
                                    {link.title}
                                    {link.label && (
                                        <span className="ml-auto text-muted-foreground">
                                            {link.label}
                                        </span>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <span
                                key={index}
                                href="#"
                                className={cn(
                                    buttonVariants({
                                        variant: link.variant,
                                        size: "sm",
                                    }),
                                    "font-bold cursor-pointer",
                                    link.variant === "default" &&
                                        "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                    "justify-start"
                                )}
                            >
                                {link.title}
                                {link.label && (
                                    <span
                                        className={cn(
                                            "ml-auto",
                                            link.variant === "default" &&
                                                "text-background dark:text-white"
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                )}
                            </span>
                        )
                    )}
                </nav>
            </div>
        </TooltipProvider>
    );
}
