import { useState, useEffect } from "react"
import debounce from "lodash/debounce"

/**
 * returns the screen's dimensions, calculated after a debounce
 * which is configurable, but defaults to 300ms
 *
 * @param {debounce} ms to debounce calcuation
 */

const useScreenDimensions = (delay = 300) => {
  const getDimensions = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [{ width, height }, setDimensions] = useState(getDimensions)

  const debouncedHandler = debounce(() => setDimensions(getDimensions()), delay)

  useEffect(() => {
    window.addEventListener("resize", debouncedHandler)

    return () => window.removeEventListener("resize", debouncedHandler)
  }, [])

  return { width, height }
}

export default useScreenDimensions
