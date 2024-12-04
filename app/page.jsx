"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import screen1 from "@/public/screen1.jpeg"
import screen2 from "@/public/screen2.jpeg"
import screen3 from "@/public/screen3.jpeg"
import screen4 from "@/public/screen4.jpeg"
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'




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


function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "ltr", dragFree: false })
  useEffect(() => {

  }, [emblaApi])

  return (
    <div className='select-none scroll-smooth max-w-md mx-auto'>
      <div className="bg-[#f1f2f6]  flex flex-col min-h-screen ">
        <div className="flex-grow">
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full">
              <div className="embla__slide h-full">
                <div className="  h-full flex items-center justify-center">
                  <Image width={100} height={100} className='w-full h1/2' alt='onborads' src={screen1} />
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className=" h-full flex items-center justify-center">
                  <Image width={100} height={100} className='w-full h1/2' alt='onborads' src={screen2} />
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className=" h-full flex items-center justify-center">
                  <Image width={100} height={100} className='w-full h1/2' alt='onborads' src={screen3} />
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className=" h-full flex items-center justify-center">
                  <Image width={100} height={100} className='w-full h1/2' alt='onborads' src={screen4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="">
            <Link href="/">
              <div className="bg-blue-600 rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold">Login</div>
            </Link>
          </div>
          <div className="">
            <Link href="/auth">
              <div className="bg-white rounded-full text-center cursor-pointer py-4 px-9 text-blue-600 font-bold">Recover my account</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page