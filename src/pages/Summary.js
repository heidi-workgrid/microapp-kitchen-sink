import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'

const Summary = () => {
  const [token, setToken] = useState()

  const microapp = useRef(
    new MicroApp({
      id: 'example-microapp',
      audience: 'example-microapp'
    })
  )

  useEffect(() => {
    console.log('Initializing app')
    microapp.current.initialize()
  }, [])

  useEffect(() => {
    console.log(`Token has changed ${token ? token.substr(token.length - 10, 10) : 'No Token'}`)
  }, [token])

  const showDetail = () => {
    // We have to use the hash router to show detail due to Github pages limitations
    console.log('Showing Detail')
    microapp.current.showDetail({
      url: `${window.location.origin}${window.location.pathname}#/detail`,
      title: 'Microapp Title'
    })
  }

  const requestToken = async () => {
    console.log('Requesting Token')
    setToken('')
    setToken(await microapp.current.getToken())
  }

  const changeTitle = () => {
    console.log('Changing Title')
    const randomTitles = ['Altered Title', 'Awesome Title', 'Another Title']
    microapp.current.updateTitle(randomTitles[Math.floor(Math.random() * randomTitles.length)])
  }

  return (
    <div>
      <h1>Workgrid Microapp</h1>
      <p>This is the summary microapp, here are the actions you can perform in summary:</p>
      <p>{token ? 'Token: ' + token.substr(token.length - 10, 10) : 'No Token'}</p>
      <div className="action-block vertical">
        <button className="secondary" onClick={changeTitle}>
          Change Title
        </button>
        <button className="secondary" onClick={requestToken}>
          Request Token
        </button>
        <button className="primary" onClick={showDetail}>
          Show Detail
        </button>
      </div>
    </div>
  )
}

export default Summary
