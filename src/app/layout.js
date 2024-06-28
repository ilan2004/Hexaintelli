import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "@/components/Navbar/Page";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        <NextUIProvider>
          <Navbars />
          <main className={styles.main}>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}

