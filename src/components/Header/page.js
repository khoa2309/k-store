/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { LeftNav } from "../LeftNav/page";
import { RightNav } from "../RightNav/page";
import { ShoppingCart } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-gradient">
            <div className="wrap text-sm">
                <div className="flex justify-between">
                    <LeftNav />
                    <RightNav />
                </div>
                <div className="flex justify-between items-center px-10">
                    <a href="/">
                        <img
                            src={"/img/logo.png"}
                            alt="logo"
                            className="w-24 h-24"
                        />
                    </a>

                    <ShoppingCart
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
}
