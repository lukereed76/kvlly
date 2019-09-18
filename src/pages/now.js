import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'

const Now = props => (
  <>
    <SEO
      title="What I'm Doing Now | Kelly Vaughn"
      image="https://kvlly.com/images/nowkelly-uncropped.jpg"
      description="A quick recap of what I'm up to right now, including what I'm listening to, working on, and celebrating. Last updated July 13, 2019."
    />
    <div className="siteHeader">
      <h1>What I'm Doing Now &mdash;</h1>
      <h2>September 18, 2019</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content summary">
        <ul className="now">
          <li>
            <b>Location: </b> On a plane en route to Santa Monica
          </li>
          <li>
            <b>Travel: </b> Most recently Scotland for a wedding, but I guess
            actual-most-recently is this trip to Santa Monica for the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rechargepayments.com/chargex-summit/"
            >
              ReCharge ChargeX Summit
            </a>
          </li>
          <li>
            <b>Reading: </b> Daisy Jones & the Six (for like 2 more hours)
          </li>
          <li>
            <b>Celebrating:</b> My fourth wedding anniversary with my husband!
          </li>
          <li>
            <b>Listening to: </b> Taylor Swift's "Lover" album on repeat
          </li>
          <li>
            <b>Watching: </b> Stargate Atlantis
          </li>
          <li>
            <b>Learning about: </b> VueJS
          </li>
          <li>
            <b>Working on: </b>
            <ul className="disc">
              <li>
                Providing advisory services to Shopify Plus merchants through my
                agency,{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://thetaproom.com"
                >
                  The Taproom
                </a>
              </li>
              <li>
                Co-hosting the{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ladybug.dev"
                >
                  Ladybug Podcast
                </a>{' '}
                with 2 awesome women in tech
              </li>
              <li>
                Lining up speaking engagements and podcast appearances to
                discuss Shopify-related topics
              </li>
            </ul>
          </li>
        </ul>
        <p className="nownownow">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nownownow.com/about"
          >
            What is this page?
          </a>
        </p>
      </div>
      <div className="inner-image">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/kvlly/status/1167819130340352007"
        >
          <Img fluid={props.data.speakingKelly.childImageSharp.fluid} />
        </a>
      </div>
    </div>
  </>
)

export default Now

export const pageQuery = graphql`
  query {
    speakingKelly: file(relativePath: { eq: "nowkelly.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
