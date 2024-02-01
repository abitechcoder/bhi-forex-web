import { inter } from "./ui/fonts";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BHIForex",
  description: "BHIForex Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
