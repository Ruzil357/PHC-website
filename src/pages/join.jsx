import React, { useRef, useState } from 'react'
import Card from '../components/UI/Card'
import MetaDecorator from '../components/MetaDecorator'
import { validPathwaysEmail } from '../utils/emails'
import axios from 'axios'

function Join() {
  const [status, setStatus] = useState({
    error: false,
    success: false,
    message: '',
    isUserError: false,
  })

  const [inProgress, setInProgress] = useState(false)

  const emailRef = useRef(null)

  const submit = async (event) => {
    // stop reload
    event.preventDefault()

    const email = emailRef.current.value
    const isValid = validPathwaysEmail(email)

    if (!isValid) {
      setStatus({
        error: true,
        success: false,
        message: 'Invalid Email',
        isUserError: true,
      })
      return
    }

    setInProgress(true)
    try {
      const resp = await axios.post('/api/join', { email })
      setStatus({
        error: false,
        success: true,
        message: 'Email sent!',
        isUserError: false,
      })
    } catch (err) {
      console.log()
      setStatus({
        error: true,
        success: false,
        message: err.response.data.msg,
        isUserError: true,
      })
    }
    setInProgress(false)
  }

  return (
    <>
      <MetaDecorator description={'Join the PSN Hack Club!'} title={'Join'} />
      <Card
        className={'!w-80 !h-auto md:!w-[32rem] block !mx-auto !my-auto !p-6'}
      >
        <p
          className={
            'text-xl md:text-2xl font-extrabold leading-6 text-gray-800 !font-sans'
          }
        >
          Join with Email
        </p>

        {status.error && (
          <span className={`text-sm md:text-base text-red-500`}>
            <p>{status.message}</p>
            {!status.isUserError && (
              <p className={'-mt-1'}>Please try again later</p>
            )}
          </span>
        )}

        {status.success && (
          <span className={`text-sm md:text-base text-emerald-500`}>
            <p>{status.message}</p>
          </span>
        )}

        <form onSubmit={submit} className={'mt-1'}>
          <label className="text-sm md:text-base font-medium leading-none text-gray-800">
            School Email &nbsp;
            <a className={status.error ? 'text-red-500' : 'text-gray-400'}>
              (@pathways.in)
            </a>
          </label>
          <input
            ref={emailRef}
            role="input"
            type="email"
            className="bg-gray-200 border rounded focus:outline-none text-sm md:text-base leading-none text-gray-800 py-3 w-full pl-3 mt-2 ring-offset-2 false"
            defaultValue=""
          />

          <button
            disabled={inProgress || status.success}
            className={`justify-center mt-2 block px-6 py-3 text-sm md:text-lg transition-colors duration-300 rounded-lg shadow-md text-white w-full ${
              inProgress || status.success
                ? 'bg-gray-400 shadow-gray-400/30 hover:cursor-not-allowed'
                : 'bg-orange-500 hover:bg-red-500 shadow-red-400/30'
            }`}
          >
            Send Email
          </button>
        </form>
      </Card>
    </>
  )
}

export default Join
