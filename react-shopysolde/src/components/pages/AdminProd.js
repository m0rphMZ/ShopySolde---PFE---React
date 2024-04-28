import React from 'react'
import Spinner from "../Comps/Spinner"

const AdminProd = () => {
    return (
        <div>
            <Spinner/>
            {window.location.replace('https://dashboard.chec.io/')}
        </div>
    )
}

export default AdminProd
