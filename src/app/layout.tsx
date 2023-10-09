import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "./provider/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const siteTitleText: string = "Chant Mantra";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content={siteTitleText} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="An app to recite your mantras"
        />
        <meta name="description" content="An app to recite your mantras" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={epilogue.className + " relative min-h-screen"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html> 
  );
}
