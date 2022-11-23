import { useEffect, useState } from "react"

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

function useFetch(url) {
  const [initial, setInitial] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    setInitial(false)
    setLoading(true)
    fetch(url)
      .then(handleErrors)
      .then((response) => response.json())
      .then((d) => {
        setLoading(false)
        setData(d)
        setIsSuccess(true)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
      })
  }, [url])

  return { data, initial, loading, error, isSuccess }
}

export default useFetch
