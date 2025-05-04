import "./globals.css";

export const metadata = {
  title: 'Cahaya Cargo - Jasa Import Barang ke Indonesia',
  description: 'Cahaya Cargo menyediakan jasa pengiriman barang dari China, Taiwan, Jepang, Jerman, dan Eropa ke Indonesia dengan layanan cepat dan terpercaya.',
  keywords: 'jasa import barang, pengiriman barang dari China, freight forwarding Indonesia, jasa kepabeanan, cargo Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}