import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider, type Language } from "@/lib/i18n/language-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hudson Valley Reviving Plan | Where History Meets Innovation",
  description:
    "A comprehensive regional initiative to transform the Hudson Valley through strategic investments in arts, technology, agriculture, healthcare, and sustainable communities across 9 counties.",
};

const VALID_LANGS = new Set<Language>(["en", "zh-TW", "es"]);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value ?? "";
  const initialLang: Language = VALID_LANGS.has(langCookie as Language)
    ? (langCookie as Language)
    : "zh-TW";

  return (
    <html lang={initialLang}>
      <body
        className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} font-sans antialiased`}
      >
        <LanguageProvider initialLanguage={initialLang}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
