"use client";

import Card from "@/components/Card/page";
import { MyPagination } from "@/components/Pagination/page";
import SideBar from "@/components/SideBar/page";
import { useState } from "react";

const cardData = [
    {
        link: "/img/product/nike/jordan2.jpg",
        name: "Air Jordan 1 High OG Heritage",
        oldPrice: "2.000.000đ",
        newPrice: "1.899.000đ",
        liked: false,
        star: 5,
        sold: "33 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/nike/jordan1.png",
        name: "Air Jordan 1 High OG UNC University Blue",
        oldPrice: "1.200.000đ",
        newPrice: "999.000đ",
        liked: true,
        star: 4,
        sold: "88 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/nike/jordan3.jpg",
        name: "Air Jordan 1 Low Vintage Grey",
        oldPrice: "1.500.000đ",
        newPrice: "1.199.000đ",
        liked: false,
        star: 3,
        sold: "30 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/nike/jordan4.jpg",
        name: "Air Jordan 1 Mid Smoke Grey",
        oldPrice: "1.000.000đ",
        newPrice: "899.000đ",
        liked: false,
        star: 3,
        sold: "3 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/nike/jordan5.jpg",
        name: "Air Force 1 White Black Đen Trắng Siêu Cấp",
        oldPrice: "5.000.000đ",
        newPrice: "4.899.000đ",
        liked: false,
        star: 5,
        sold: "2 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/nike/jordan6.jpg",
        name: "Air Force 1 Para Noise",
        oldPrice: "4.000.000đ",
        newPrice: "3.699.000đ",
        liked: true,
        star: 5,
        sold: "10 đã bán",
        brand: "Nike",
        origin: "USA",
    },
    {
        link: "/img/product/balenciaga/balen2.jpeg",
        name: "Balenciaga Speed Trainer 'Grey Logo'",
        oldPrice: "10.000.000đ",
        newPrice: "9.899.000đ",
        liked: false,
        star: 5,
        sold: "1 đã bán",
        brand: "Balenciaga",
        origin: "USA",
    },
    {
        link: "/img/product/balenciaga/balen3.jpeg",
        name: "Balenciaga Triple S Logotype Trainers 'Black'",
        oldPrice: "20.000.000đ",
        newPrice: "19.899.000đ",
        liked: false,
        star: 5,
        sold: "0 đã bán",
        brand: "Balenciaga",
        origin: "USA",
    },
    {
        link: "/img/product/balenciaga/balen1.jpg",
        name: "Balenciaga Triple S",
        oldPrice: "3.500.000đ",
        newPrice: "3.299.000đ",
        liked: true,
        star: 5,
        sold: "20 đã bán",
        brand: "Balenciaga",
        origin: "USA",
    },
    {
        link: "/img/product/adidas/adidas1.jpg",
        name: "Stan Smith",
        oldPrice: "5.500.000đ",
        newPrice: "4.500.000đ",
        liked: false,
        star: 5,
        sold: "1 đã bán",
        brand: "Adidas",
        origin: "USA",
    },
    {
        link: "/img/product/adidas/adidas2.jpg",
        name: "Superstar Hanimi",
        oldPrice: "2.600.000đ",
        newPrice: "1.560.000đ",
        liked: false,
        star: 5,
        sold: "10 đã bán",
        brand: "Adidas",
        origin: "USA",
    },
    {
        link: "/img/product/adidas/adidas3.jpg",
        name: "Campus Youth Of PARIS",
        oldPrice: "3.300.000đ",
        newPrice: "1.980.000đ",
        liked: false,
        star: 5,
        sold: "5 đã bán",
        brand: "Adidas",
        origin: "USA",
    },
    {
        link: "/img/product/adidas/adidas4.jpg",
        name: "Goft Đinh Liền Stan Smith Primegreen Special Edition",
        oldPrice: "3.400.000đ",
        newPrice: "2.380.000đ",
        liked: false,
        star: 5,
        sold: "5 đã bán",
        brand: "Adidas",
        origin: "USA",
    },
    {
        link: "/img/product/vans/vans1.jpg",
        name: "Skate Old Skool Black/White",
        oldPrice: "2.300.000đ",
        newPrice: "2.200.000đ",
        liked: false,
        star: 5,
        sold: "5 đã bán",
        brand: "Vans",
        origin: "USA",
    },
    {
        link: "/img/product/vans/vans2.jpg",
        name: "Old Skool Vans Club White",
        oldPrice: "2.700.000đ",
        newPrice: "2.500.000đ",
        liked: false,
        star: 5,
        sold: "5 đã bán",
        brand: "Vans",
        origin: "USA",
    },
    {
        link: "/img/product/vans/vans3.jpg",
        name: "Era Classic Sport Black/Waterfall",
        oldPrice: "1.700.000đ",
        newPrice: "1.450.000đ",
        liked: false,
        star: 5,
        sold: "5 đã bán",
        brand: "Vans",
        origin: "USA",
    },
];

const ITEMS_PER_PAGE = 8;

export default function Home() {
    const [currentPage, setCurrentPage] = useState(
        1
        // localStorage.getItem("currentPage") || 1
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCards = cardData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(cardData.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // localStorage.setItem("currentPage", page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="grid grid-cols-12 pb-10 wrap">
            <section className="hidden md:col-span-2 md:block">
                <SideBar />
            </section>

            <section className="col-span-12 md:col-span-10 ">
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
                    {" "}
                    {currentCards.map((d, i) => (
                        <Card key={i} {...d} />
                    ))}
                </section>
                <MyPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </section>
        </div>
    );
}
