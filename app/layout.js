import "./globals.css";

export const openGraphImage = { images: ['./opengraph-image.jpeg'] }


export const metadata = {
  title: "Blockchain",
  description: "Be early to the future of finance Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions. Submit a complaint The only crypto app you'll ever need Buy, sell, and swap with ease Use a card or bank account to buy BTC, ETH, stablecoins, and other assets. Earn rewards on your crypto...",
  openGraph: {
    ...openGraphImage,
    title: "Blockchain",
    description: "Be early to the future of finance Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions. Submit a complaint The only crypto app you'll ever need Buy, sell, and swap with ease Use a card or bank account to buy BTC, ETH, stablecoins, and other assets. Earn rewards on your crypto...",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`scroll-smooth dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
