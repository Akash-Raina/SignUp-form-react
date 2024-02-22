import React from 'react'
import {useForm} from 'react-hook-form'
import draw from './assests/draw.webp'
import { IoPerson } from "react-icons/io5"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
function Forms() {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
        checkMark: yup.bool().oneOf([true])
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const submitData = (data) =>{
        console.log(data)
    }
    return (
        <div className='flex w-screen h-screen bg-slate-600 justify-center items-center'>
            <div className='bg-white w-[90%] h-[90%] border  flex flex-col items-center md:flex-row'>
                
                <div className=' w-[70%] h-[30%] md:w-[50%] md:h-[75%] md:border-r-2 border-slate-300'>
                    <img src={draw} alt="image" className='h-[100%] w-[100%] rounded-md'/>
                </div>
    
                <h1 className='text-3xl font-bold md:hidden'>Sign up</h1>

                <form onSubmit={handleSubmit(submitData)} className=' h-[50%] grid gap-2 md:h-[80%] md:w-[50%] md:justify-center'>

                    <h1 className='hidden md:block md:text-3xl md:font-bold md:text-center'>Sign up</h1>

                    <div className='flex items-center gap-2 '>
                        <label><IoPerson /></label>
                        <input type="text" placeholder='Your Name*' className='border w-56' {...register("fullName")}/>
                    </div>

                    {errors.fullName?<p className=' w-48 ml-10 text-red-600 font-normal text-sm h-0'>FullName is required*</p>:''}

                    <div className='flex items-center gap-2'>
                        <label><MdEmail /></label>
                        <input type="email" placeholder='Email' className='border w-56' {...register("email")}/>
                    </div>

                    {errors.email?<p className=' w-48 ml-10 text-red-600 font-normal text-sm h-0'>Email is required*</p>:''}

                    <div className='flex items-center gap-2'>
                        <label><RiLockPasswordFill /></label>
                        <input type="password" placeholder='Password' className='border w-56' {...register("password")}/>
                    </div>

                    {errors.password?<p className=' w-48 ml-10 text-red-600 font-normal text-sm h-0'>Password is required*</p>:''}

                    <div className='flex items-center gap-2'>
                        <label><FaKey /></label>
                        <input type="password" placeholder='Repeat your password ' className='border w-56' {...register("confirmPassword")}/>
                    </div>

                    {errors.confirmPassword?<p className=' w-48 ml-10 text-red-600 font-normal text-sm h-0'>Password mismatch*</p>:''}

                    <div className='flex items-center gap-2 border-b border-black'>
                        <input type="checkbox" className='cursor-pointer ' {...register("checkMark")}/>
                        <label> I agree all statements in <a href="/">Terms of Services</a></label>
                    </div>

                    {errors.checkMark?<p className=' w-48 ml-10 text-red-600 font-normal text-sm h-0'>CheckMark is required*</p>:''}

                    <button className='hidden md:block md:rounded-lg md:bg-blue-500 md:w-20 md:h-10 md:mt-2 md:hover:bg-blue-400 md:ml-28 '>Register</button>
                    
                </form>

                <button className='rounded-lg bg-blue-500 w-20 h-10 mt-4 hover:bg-blue-400 md:hidden '>Register</button>

            </div>
        </div>
    )
}

export default Forms