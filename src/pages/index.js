import React from "react"
import Layout from "../components/Layout"
import Mainpage from "../components/Mainpage/Mainpage"
import SEO from "../components/SEO"

export default function Home() {
  return (

    <Layout>
      <SEO
        title="Ronaldo Gjini | Software Development"
        description="Welcome to my personal website. Here you can learn more about my projects and web development experience."
      />
      <Mainpage />
    </Layout>
  )
}