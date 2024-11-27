import Logo from "./components/Logo";
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
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
