import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
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
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}
                    >
                        ✕
                    </Link>

                    <h3 className="font-bold text-lg">Login!</h3>

                    {/* email */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder="Enter your email" className="w-80 px-3 rounded-md outline-none py-1 border border-gray-300" {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                    </div>

                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span>
                        <br />
                        <input type="password" placeholder="Enter your password" className="w-80 px-3 rounded-md outline-none py-1 border border-gray-300" {...register("password", { required: true })} />
                        <br />
                        {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
                    </div>

                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                        <button type="submit" className="bg-pink-500 rounded-md px-3 py-1 text-white hover:bg-pink-700 duration-200">Login</button>
                        <Link to="/signup">
                            <p>Not Registered? <span className="underline text-blue-500 cursor-pointer">Sign up!</span></p>
                        </Link>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default Login
