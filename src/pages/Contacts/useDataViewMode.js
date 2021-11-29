import { useState, useEffect } from "react"
import { DATA_VIEW_MODE } from "./constants"

const getInitialDataViewMode = () => {
  return localStorage.getItem("DataViewMode") || DATA_VIEW_MODE.TABLE
}

export const useDataViewMode = () => {
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode)

  useEffect(() => {
    localStorage.setItem("DataViewMode", dataViewMode)
  }, [dataViewMode])

  return [dataViewMode, setDataViewMode]
}
