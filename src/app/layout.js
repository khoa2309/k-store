import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/page";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"], // Thêm các trọng lượng cần thiết
});

export const metadata = {
    title: "K - Store",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`select-none ${roboto.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <div className="border-b-blue-500 border-b-4">
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
