import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        // Handle login logic here
    }
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </Link>

                        <h3 className="font-bold text-lg">Sign up!</h3>
                        {/* name */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input type="text" name="" id="" placeholder="Enter your name" className="w-80 px-3 rounded-md outline-none py-1 border border-gray-300" {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                        {/* email */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email" name="" id="" placeholder="Enter your email" className="w-80 px-3 rounded-md outline-none py-1 border border-gray-300" {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password" name="" id="" placeholder="Enter your password" className="w-80 px-3 rounded-md outline-none py-1 border border-gray-300" {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Button */}
                        <div className='flex justify-around mt-4 '>
                            <button className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200">Register</button>
                            <p>Have an account? <button className="underline text-blue-500 cursor-pointer" onClick={() => {
                                document.getElementById('my_modal_3').showModal()
                            }}>Login!</button></p>
                            <Login />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
