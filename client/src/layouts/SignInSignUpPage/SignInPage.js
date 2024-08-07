import React from 'react'
import './sign-in.css'

function SignInPage() {
    return (
        <main className="form-signin w-100 mx-auto">
            <form>
                    <h1 className="h3 mb-3 fw-normal text-center">Sign In</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    
            </form>
        </main>
    )
}

export default SignInPage