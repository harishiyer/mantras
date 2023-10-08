import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "./provider/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chant Mantra",
  description: "An app to recite your mantras",
};

export const siteTitleText: String = "Chant Mantra";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className + " relative min-h-screen"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Header />
          <main className="min-h-[85vh] lg:min-h-[80vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
