"use client"
import { inter } from "./ui/fonts";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";

// export const metadata = {
//   title: "BHIForex",
//   description: "BHIForex Official Website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BHIForex</title>
      </head>
      <body className={inter.className}>
        <Toaster position="top-right" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
