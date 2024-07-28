/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(210deg,hsl(173deg 100% 37%) 0%,hsl(179deg 100% 36%) 19%,hsl(185deg 100% 38%) 27%,hsl(192deg 100% 42%) 34%,hsl(198deg 100% 45%) 41%,hsl(203deg 100% 49%) 47%,hsl(206deg 100% 50%) 53%,hsl(209deg 100% 50%) 59%,hsl(212deg 100% 50%) 66%,hsl(217deg 100% 50%) 73%,hsl(223deg 100% 50%) 81%,hsl(269deg 100% 47%) 100%)",
                gradientReverse:
                    "linear-gradient(210deg,hsl(173deg 100% 37%) 0%,hsl(179deg 100% 36%) 19%,hsl(185deg 100% 38%) 27%,hsl(192deg 100% 42%) 34%,hsl(198deg 100% 45%) 41%,hsl(203deg 100% 49%) 47%,hsl(206deg 100% 50%) 53%,hsl(209deg 100% 50%) 59%,hsl(212deg 100% 50%) 66%,hsl(217deg 100% 50%) 73%,hsl(223deg 100% 50%) 81%,hsl(269deg 100% 47%) 100%)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
