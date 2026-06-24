import { Montserrat, Outfit } from "next/font/google";
import { LoadingProvider } from "@/components/LoadingProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Smart Mobility | Scooters Elétricas com Economia Real",
  description:
    "Scooters elétricas com economia real, tecnologia e mobilidade. Conheça os modelos da Smart Mobility e reassuma o controle do seu tempo.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`dark scroll-smooth ${montserrat.variable} ${outfit.variable}`}
    >
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-amber-600/30 selection:text-amber-400">
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
