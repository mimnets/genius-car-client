import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg';

const SignUp = () => {
    const handleSignup = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col">
            <div className="text-center">
            <img className='w-3/4' src={img} alt=""/>
            </div>
            <div className="card w-full mx-20 max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                <input onSubmit={handleSignup} type='submit' className="btn btn-primary" value="Signup"/>
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;