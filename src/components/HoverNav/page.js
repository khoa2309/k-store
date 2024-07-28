/* eslint-disable @next/next/no-img-element */
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

export function MyHoverCard() {
    return (
        <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
                <span className="cursor-pointer hover-nav border-r pr-3">
                    Vào ứng dụng K - Store
                </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-52 p-0">
                <div className="flex flex-col items-center">
                    <div>
                        <img src="/img/qrcode.jpg" alt="qrcode" />
                    </div>
                    <div className="flex flex-wrap px-4 justify-between gap-2 pb-2">
                        <a href="#">
                            {" "}
                            <img
                                src="/img/app-store.png"
                                alt="app-store"
                                className="w-16"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/img/gg-play.png"
                                alt="gg-play"
                                className="w-16"
                            />
                        </a>
                        <a href="#">
                            {" "}
                            <img
                                src="/img/app-gallery.png"
                                alt="app-gallery"
                                className="w-16"
                            />
                        </a>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
