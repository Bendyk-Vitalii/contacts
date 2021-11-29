import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { useCallback } from "react"
import { DATA_VIEW_MODE } from "../constants"
import { PropTypes } from "prop-types"

export const ToggleDataViewMode = ( {dataViewMode, setDataViewMode} ) => {
  const handleChangeViewMode = useCallback((_, nextView) => {
    setDataViewMode(nextView)
  },
  [setDataViewMode]
  )
  return (
    <ToggleButtonGroup
      orientation="horizontal"
      exclusive
      onChange={handleChangeViewMode}
      value={dataViewMode}
    >
      <ToggleButton
        value={DATA_VIEW_MODE.TABLE}
        aria-label={DATA_VIEW_MODE.TABLE}
      >
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODE.GRID}
        aria-label={DATA_VIEW_MODE.GRID}
      >
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

ToggleDataViewMode.propsTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODE.TABLE, DATA_VIEW_MODE.GRID]).isRequired,
  setDataViewMode: PropTypes.func.isRequired,
}
