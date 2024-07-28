/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { Children } from "react";

const footerData = [
    {
        title: "Customer Care",
        subContent: [
            {
                text: "Help Center",
                link: "#",
            },
            {
                text: "Shop Mall",
                link: "#",
            },
            {
                text: "Purchase Guide",
                link: "#",
            },
        ],
    },
    {
        title: "About Us",
        subContent: [
            {
                text: "Introduction",
                link: "#",
            },
            {
                text: "Careers",
                link: "#",
            },
            {
                text: "Terms & Conditions",
                link: "#",
            },
        ],
    },
    {
        title: "Categories",
        subContent: [
            {
                text: "Adidas",
                link: "#",
            },
            {
                text: "Nike",
                link: "#",
            },
            {
                text: "Vans",
                link: "#",
            },
        ],
    },
    {
        title: "Follow Us",
        subContent: [
            {
                text: (
                    <>
                        <Facebook width={20} height={20} />
                        Facebook
                    </>
                ),
                link: "https://www.facebook.com/khoa1midside/",
            },
            {
                text: (
                    <>
                        <Instagram width={20} height={20} />
                        Instagram
                    </>
                ),
                link: "https://www.instagram.com/khoa_infp/",
            },
            {
                text: (
                    <>
                        <Linkedin width={20} height={20} />
                        Linkedin
                    </>
                ),
                link: "https://www.linkedin.com/in/khoa230902/",
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer>
            <div className="wrap grid grid-cols-2 md:grid-cols-5 my-10 text-center md:text-left">
                {footerData.map((d, i) => (
                    <div key={i}>
                        <p className="uppercase text-lg font-bold mb-5">
                            {d.title}
                        </p>
                        {d.subContent.map((o, h) => (
                            <p
                                className="text-sm text-gray-400 cursor-pointer mb-3"
                                key={h}
                            >
                                <a
                                    href={o.link}
                                    target="_blank"
                                    className="inline-block"
                                >
                                    <span className="flex gap-2 items-center hover:text-gray-950 dark:hover:text-white transition-all">
                                        {o.text}
                                    </span>
                                </a>
                            </p>
                        ))}
                    </div>
                ))}
                <div className="col-span-2 md:col-span-1">
                    <p className="uppercase text-lg font-bold mb-5">
                        Visit Our Store on the App
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <img
                            src={"/img/qrcode.jpg"}
                            alt="qrcode"
                            className="border w-24"
                        />
                        <div className="flex flex-col justify-around">
                            <img
                                src={"/img/app-store.png"}
                                className="w-16"
                                alt="app-store"
                            />
                            <img
                                src={"/img/gg-play.png"}
                                className="w-16"
                                alt="gg-play"
                            />
                            <img
                                src={"/img/app-gallery.png"}
                                className="w-16"
                                alt="app-gallery"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradientReverse text-center py-4 text-sm font-semibold">
                Khoa.dev 😎 Built with Passion 😍
            </div>
        </footer>
    );
}
