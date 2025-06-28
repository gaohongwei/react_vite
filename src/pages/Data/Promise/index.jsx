import React from "react"
import useApiCall from "@/pages/common/useApiCall"
import { fakeApi } from "./fakeApi"

export default function FakePromise() {
  const { apiData } = useApiCall({ apiFunction: fakeApi })
  console.log("Render apiData", apiData)
  if (!apiData) return <div>NOdata</div>
  return <pre>{JSON.stringify(apiData, null, 2)}</pre>
}
