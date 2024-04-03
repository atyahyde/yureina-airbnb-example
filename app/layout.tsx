import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@airbnb/components/layouts/navbar/Navbar";
import RegisterModal from "@airbnb/components/fragments/RegisterModal";
import ToastProvider from "@airbnb/provider/ToastProvider";
import LoginModal from "@airbnb/components/fragments/LoginModal";
import getCurrentUser from "@airbnb/actions/getCurrentUser";
import RentModal from "@airbnb/components/fragments/RentModal";
import SearchModal from "@airbnb/components/fragments/SearchModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
