import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";

import '../public/styles/reset.css'

export const metadata: Metadata = {
  title: "CKEditor",
  description: "5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'rgb(220,220,220)'}}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
