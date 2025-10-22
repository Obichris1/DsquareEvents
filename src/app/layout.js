import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppDatePickerProvider from "./Components/Features/AppDatePicker";
import WhatsAppIcon from "./Components/WhatsappIcon";
import Script from "next/script";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DSquare Events Center | Premium Event Space in Ikotun-Idimu",
  description:
    "DSquare Events Center offers a modern 600-seater hall in Ikotun-Idimu, Lagos. Perfect for weddings, birthdays, corporate events, and conferences with excellent facilities and accessibility.",
  keywords:
    "event center, wedding hall, Ikotun Idimu, Lagos, DSquare Events Center, conference hall, party venue, corporate events, affordable hall, event space, Lagos events",
  openGraph: {
    title: "DSquare Events Center | Premium Event Space in Ikotun-Idimu",
    description:
      "Book DSquare Events Center — a spacious, fully air-conditioned 600-seater hall ideal for weddings, birthdays, and corporate gatherings in Lagos.",
    url: "https://www.dsquarecenter.com",
    siteName: "DSquare Events Center",
    images: [
      {
        url: "/OgImage.jpg", // Make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: "DSquare Events Center - Premium Event Venue in Lagos",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.dsquarecenter.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "9wtmGoGEcyepfMCwBoOSGarwMNnSrmD_vIIy29Qz-1c", // Replace if available
    // google-site-verification=9wtmGoGEcyepfMCwBoOSGarwMNnSrmD_vIIy29Qz-1c
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <AppDatePickerProvider>{children}</AppDatePickerProvider>
        <WhatsAppIcon />
        <Footer />

        {/* Optional external scripts (e.g., analytics, etc.) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_TRACKING_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
