import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Img from 'gatsby-image'
import Newsletter from '../components/newsletter'

const Book = props => (
  <>
    <SEO
      title="Start Freelancing: Ebook Coming Soon"
      image="https://kvlly.com/images/seo-kelly.jpg"
    />
    <div className="siteHeader">
      <h1>Start Freelancing &mdash;</h1>
      <h2>I'm writing a book!</h2>
    </div>
    <div className="inner-flex">
      <div className="inner-content">
        <p>
          Hi, I'm Kelly Vaughn. I'm the Founder and CEO of The Taproom, Co-host
          of the Ladybug Podcast, and long-time freelancer.
        </p>
        <p>
          In fact, I landed my first freelance client when I was just 14 years
          old. (I was paid a t-shirt. Don't worry - I'll encourage you to charge
          more than that.)
        </p>
        <p>
          I'm writing this book to teach you how to begin freelancing. From
          establishing your business to finding your first client, from closing
          the deal to completing the work, from dealing with difficult client
          situations to expanding your team – there's a lot to cover.
        </p>
        <p>
          If you're interested in being alerted when the book has been released,
          pop over your info in the form below. I promise not to spam you or
          sell your data. GDPR and CAN-SPAM are tricky but I respect them.
        </p>

        <h3>Sign up to receive an email when the book is available.</h3>
        <Newsletter />
      </div>
      <div className="inner-image">
        <Img fluid={props.data.kellyBook.childImageSharp.fluid} />
      </div>
    </div>
  </>
)

export default Book

export const pageQuery = graphql`
  query {
    kellyBook: file(relativePath: { eq: "kelly-book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
