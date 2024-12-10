import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
