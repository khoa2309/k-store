import { cn } from "@/lib/utils";
import {
    Heart,
    HeartCrack,
    HeartHandshake,
    HeartIcon,
    HeartPulse,
    Star,
    StarHalf,
} from "lucide-react";
import Image from "next/image";

export default function Card(props) {
    const fullStars = Math.floor(props.star);
    const hasHalfStar = props.star % 1 !== 0;
    return (
        <CardContent>
            <section
                className="w-full h-40 bg-cover bg-center pt-[100%]"
                style={{ backgroundImage: `url(${props.link})` }}
            ></section>

            <section className="p-2 flex flex-col gap-2">
                <p className="text-sm">{props.name}</p>
                <p className="flex items-center justify-between flex-wrap">
                    <span className="line-through text-gray-500">
                        {props.oldPrice}
                    </span>
                    <span> {props.newPrice}</span>
                </p>
                <p className="flex items-center justify-between flex-wrap">
                    <span>
                        {props.liked ? (
                            <Heart size={18} color="red" strokeWidth={3} />
                        ) : (
                            <HeartCrack size={18} color="red" strokeWidth={3} />
                        )}
                    </span>
                    <span className="flex gap-1 items-center flex-wrap">
                        {[...Array(fullStars)].map((_, index) => (
                            <Star
                                key={`full-${index}`}
                                size={12}
                                color="#facc15"
                                strokeWidth={2}
                            />
                        ))}
                        {hasHalfStar && (
                            <StarHalf
                                size={12}
                                strokeWidth={2}
                                color="#facc15"
                            />
                        )}
                        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map(
                            (_, index) => (
                                <Star
                                    key={`empty-${index}`}
                                    size={12}
                                    strokeWidth={2}
                                />
                            )
                        )}
                        <span className="text-xs ml-1">{props.sold}</span>
                    </span>
                </p>
                <p className="flex items-center justify-between flex-wrap text-xs">
                    <span>{props.brand}</span>
                    <span>{props.origin}</span>
                </p>
            </section>
        </CardContent>
    );
}
export function CardContent({ className, ...props }) {
    return (
        <div
            {...props}
            className={cn(
                "rounded-xl border shadow overflow-hidden",
                className
            )}
        />
    );
}
