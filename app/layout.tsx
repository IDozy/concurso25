import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

import getCurrentUser from "./acctions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

const inter = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concursos Ganaderos",
  description:
    "Plataforma dedicada a la gestión, promoción y difusión de concursos ganaderos, destacando la excelencia en el sector agropecuario.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />

          <main className="site-content">{children}</main>
          <div>{/* Your other components    <Footer /> */}</div>
        </ClientOnly>
      </body>
    </html>
  );
}
