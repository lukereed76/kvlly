import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'

const Newsletter = () => {
  const [firstName, setFirstName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage('Sending...')
    const response = await addToMailchimp(email, { FNAME: firstName })
    if (response.result === 'error') {
      if (response.msg.toLowerCase().includes('already subscribed')) {
        setMessage("You're already on to the list!")
      } else {
        setMessage('Some error occured while subscribing you to the list.')
      }
      setDisabled(false)
    } else {
      setMessage("You're on the list, thanks!")
    }
  }

  return (
    <div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          aria-label="First name"
          onChange={event => setFirstName(event.target.value)}
          placeholder="First name"
          required
          type="text"
        />
        <input
          aria-label="Email address"
          onChange={event => setEmail(event.target.value)}
          placeholder="Email address"
          required
          type="email"
        />
        <button disabled={disabled}>Sign up</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default Newsletter
