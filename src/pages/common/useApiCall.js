import { useEffect, useState, useCallback } from "react"

export default function useApiCall({
  apiFunction,
  initValue = {},
  willRun = true,
  dependenceVariable,
}) {
  const [apiData, setApiData] = useState(initValue)
  const [apiError, setApiError] = useState()
  const [isPending, setIsPending] = useState(false)

  const getApiData = useCallback(async () => {
    setIsPending(true)
    try {
      console.log("--Reall Call apiFunction")
      const data = await apiFunction()
      setApiData(data)
    } catch (error) {
      setApiError(error)
    }
    setIsPending(false)
  }, [apiFunction])

  useEffect(() => {
    if (willRun) getApiData()
  }, [dependenceVariable, willRun, getApiData])

  const reRun = () => getApiData()

  return {
    isPending,
    apiData,
    apiError,
    setApiData,
    reRun,
    hasError: apiError,
    success: !apiError,
  }
}

// 降温小腿疼
