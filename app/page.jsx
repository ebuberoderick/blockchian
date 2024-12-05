"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'


function Page() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "ltr", dragFree: false })
  useEffect(() => {

  }, [emblaApi])

  return (
    <div className='select-none scroll-smooth max-w-lg mx-auto'>
      <div className="bg-[#f1f2f6]  flex flex-col min-h-screen ">
        <div className="flex-grow">
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full">
              <div className="embla__slide h-full">
                <div className={`h-full flex flex-grow items-center justify-center screen1`}>
                  <div className="h-[580px]"></div>
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className={`h-full flex items-center justify-center screen2`}>
                  <div className="h-[593px]"></div>
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className={`h-full flex items-center justify-center screen3`}>
                  <div className="h-[580px]"></div>
                </div>
              </div>
              <div className="embla__slide h-full">
                <div className={`h-full flex items-center justify-center screen4`}>
                  <div className="h-[585px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div className="">
            <Link href="/auth">
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