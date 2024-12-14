import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import "./globals.scss";
import type { Metadata } from "next";
import { Karla } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceGazing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Logo />
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
