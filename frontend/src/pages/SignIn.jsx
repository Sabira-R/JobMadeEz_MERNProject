import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function SignIn() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3000/api/signin', user)
            if (response.data.success) {
                localStorage.setItem('token', response.data.token)
                navigate('/main')
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="hero bg-[#e1dae4] min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-black/60">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-[#9389bd]  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black/70">Email</span>
                                </label>
                                <input name='email' onChange={handleChange} type="email" placeholder="email" className="input input-bordered bg-white text-black/60" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black/70">Password</span>
                                </label>
                                <input name='password' onChange={handleChange} type="password" placeholder="password" className="input input-bordered bg-white text-black/60" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-black/60">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}