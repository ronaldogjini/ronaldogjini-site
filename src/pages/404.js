import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

function NotFound() {
    return (
        <Layout>
            <SEO
                title="Ronaldo Gjini | Not Found"
                description="404 Not Found."
            />
            <div className="w-screen h-screen flex  justify-center content-center flex-wrap">
                <h1 className="text-6xl font-bold ">
                    404 Not Found
                </h1>

            </div>
        </Layout>
    )
}

export default NotFound
