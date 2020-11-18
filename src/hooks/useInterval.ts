import React, {useEffect, useRef} from 'react'

export  const useInterval = (callback: Function, delay: number) => {
  const savedCallback: any = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (...args: any[]) => savedCallback.current(...args)

    if (delay != null) {
      const id = setInterval(handler, delay)
      return () => {
        clearInterval(id)
      }
    }

  }, [delay])
}
