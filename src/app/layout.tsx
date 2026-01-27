import styles from "./page.module.css";
import localFont from "next/font/local"; import Sidebar from "@/app/components/layout/sidebar";
import Navbar from "@/app/components/layout/navbar";
import "./globals.css";

// Konfigurasi font
const switzer = localFont({
  src: [
    {
      path: './assets/fonts/Switzer-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/Switzer-LightItalic.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-switzer',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.bodyReset} ${switzer.variable}`}>
          <Navbar /> 
          <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainSection}>
              <main className={styles.content}>{children}</main>
            </div>
          </div>
      </body>
    </html>
  );
}
