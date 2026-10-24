import { Prompt } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavProgress from "@/components/NavProgress";
import { LANGS, isLang, getDict } from "@/lib/i18n";
import "../globals.css";

const prompt = Prompt({ subsets: ["latin", "thai"], weight: ["400", "500", "600", "700", "800"], variable: "--font-prompt", display: "swap" });

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map(lang => ({ lang }));

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = getDict(lang).meta;
  return {
    metadataBase: new URL("https://tiscofficial.com"),
    title: m.title,
    description: m.desc,
    icons: { icon: "/assets/tisc-logo.png" },
    alternates: { canonical: `/${lang}/`, languages: { th: "/th/", en: "/en/" } },
    openGraph: {
      type: "website", url: `/${lang}/`, title: m.title, images: ["/assets/hero.jpg"],
      description: "Invest Intelligently, Lead Globally", locale: lang === "th" ? "th_TH" : "en_US",
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport = { themeColor: "#0a1a6b" };

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = getDict(lang).nav;
  return (
    <html lang={lang} className={prompt.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">{d.skip}</a>
        <NavProgress />
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
