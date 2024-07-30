import React from 'react'

function SignInCTA() {
    return (
        <div className="d-none d-lg-block">
            <div className="row g-0 mt-5">
                <div className="col-sm-6 col-md-6">
                    <div className="col-image-left"></div>
                </div>
                <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                    <div className="ml-2">
                        <h1>What have you been reading?</h1>
                        <p className="lead">
                            We would love to know what you have been reading.
                            Sign in and leave us your review.
                        </p>
                        <a className="btn btn-outline-dark btn-lg main-color  text-black" href="/#">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInCTA