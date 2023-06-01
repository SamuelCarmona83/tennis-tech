import React from "react";


export const Login = () => {
    return(
        <>
            <div className="container d-flex justify-content-center">

                <div className="card bg-dark my-2" style={{width: "500px"}}>
                    <h2 className="card-header text-light text-center">Welcome!!</h2>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <button className="btn btn-primary" style={{width: "100%"}}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}