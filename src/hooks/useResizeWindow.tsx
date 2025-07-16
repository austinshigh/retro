import { useCallback, useEffect, useRef, useState } from "react"

const useResizeWindow = () => {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  const throttleTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleResize = useCallback(() => {
    if (throttleTimeout.current) return

    throttleTimeout.current = setTimeout(() => {
      console.log(window.innerWidth)
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
      throttleTimeout.current = null
    }, 200)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current)
      }
    }
  })
  return { width, height }
}

export default useResizeWindow
