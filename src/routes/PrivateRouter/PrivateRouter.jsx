import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function PrivateRouter() {
    const token = window.localStorage.getItem("token")
    return (<>
        {token ?
            <div>
                <Outlet />
            </div>
            :
            <Navigate to="/login" replace={true} />
        }
    </>
    )
}

export default PrivateRouter