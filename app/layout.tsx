import type { Metadata } from "next";
import "./globals.css";
import QryProvider from "@/data/query/QryProvider";
import StoreProvider from "@/data/redux/StoreProvider";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "NAK COLLECTIONS",
  description: "African ware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
        <QryProvider>
          <Nav />
        {children}
        <Footer />
        </QryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
