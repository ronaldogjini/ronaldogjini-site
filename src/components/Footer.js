import React from 'react'

function Footer() {

    return (
        <div className="flex justify-center items-center p-3 w-full bg-black z-50" >
            <p className="text-white">© {new Date().getFullYear()} Ronaldo Gjini</p>
        </div >
    )
}

export default Footer
