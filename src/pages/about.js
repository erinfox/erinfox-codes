import React from "react"
import { Link } from "gatsby"
import selfie from "../images/erin.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="sm:ml-64 sm:pt-24 flex justify-center items-center flex-col">
      <div className="pb-8">
        <img
          src={selfie}
          alt="self picture"
          className="rounded-lg"
          style={{ height: "400px" }}
        />
      </div>
      <p className="">
        Erin Fox is an international speaker who has found a home in the React
        Community. Whether it’s building out projects in React or React Native,
        she enjoys a good Flexbox challenge and finding different UI solutions.
        She’s passionate about explaining things simply and cats. She lives in
        the Bay Area, California.
      </p>
      <div className="flex items-center justify-center mt-8">
        <button className="px-4 py-2 font-bold border-solid border-2 border-black bg-white hover:bg-black rounded-sm text-black hover:text-white">
          Short
        </button>
        <button className="mx-8 px-4 py-2 font-bold border-solid border-2 border-black bg-white hover:bg-black rounded-sm text-black hover:text-white">
          Long
        </button>
        <button className="px-4 py-2 font-bold border-solid border-2 border-black bg-white hover:bg-black rounded-sm text-black hover:text-white">
          Speaker
        </button>
      </div>
    </div>
  </Layout>
)

export default AboutPage
