import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppDatePickerProvider from "./Components/Features/AppDatePicker";
import WhatsAppIcon from "./Components/WhatsappIcon";
import Head from "next/head";

export const metadata = {
  title: "DSquare Events Center",
  description:
    "With a spacious 600-seating capacity, our facility is designed to provide comfort and style for gatherings of all sizes. From weddings and corporate events to intimate gatherings \
    our versatile space is designed to adapt to your unique needs. Located at the heart of Ikotun-Idimu, our facility offers easy accessibility from major roads, ensuring convenience and safety for all attendees",
    openGraph : {
      title : "DSquare Events Center",
      description : "Event center located at Ikotun-Idimu",
      type : 'website',
      locale : "en_US",
      url : "",
      siteName : "Dsquare"

    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <Navbar />

        <AppDatePickerProvider>{children}</AppDatePickerProvider>

        <WhatsAppIcon />

        <Footer />
      </body>
    </html>
  );
}
