import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "../ui/skeleton";

export function MyAvatar() {
    return (
        <div className="cursor-pointer flex items-center gap-1 h-min hover-nav">
            <Avatar className="w-6 h-6">
                <AvatarImage src="/img/avatar.png" alt="khoa" />
                <AvatarFallback>
                    <Skeleton />
                </AvatarFallback>
            </Avatar>
        </div>
    );
}
