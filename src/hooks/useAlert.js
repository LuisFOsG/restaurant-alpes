import { useState, useEffect } from 'react'
import Alert from 'components/Alert'

const useAlert = () => {
  const [isActiveAlert, setActive] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    message: ''
  })

  useEffect(() => {
    let timer

    if (isActiveAlert) {
      timer = setTimeout(() => {
        setActive(false)
      }, 2000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isActiveAlert])

  const showAlert = (message = '', type = '') => {
    setMessage({ message, type })
    setActive(true)
  }

  const AlertComponent = () => {
    if (isActiveAlert) return <Alert message={message.message} type={message.type} />
    return null
  }

  return {
    AlertComponent, showAlert
  }
}

export default useAlert
