import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material"
import PropTypes from "prop-types"
import Clear from "@mui/icons-material/Clear"
import { NATIONALITIES_HUMAN_NAME } from "../../../constants/nationality"
import { memo } from "react"

const FieldFullName = memo(({ value, onChange }) => (
  <TextField
    aria-label="Fullname"
    name="fullname"
    label="Fullname"
    variant="outlined"
    value={value}
    onChange={onChange}
    sx={{ mt: 1, mb: 1 }}
    size="small"
  />
))

const FieldGender = memo(({ value, onChange }) => (
  <FormControl variant="standard" sx={{ ml: 1, mb: 1, minWidth: 120 }}>
    <InputLabel id="gender">Gender</InputLabel>
    <Select
      name="gender"
      label="Gender"
      value={value}
      onChange={onChange}
      labelId="gender"
    >
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </Select>
  </FormControl>
))

const FieldNationality = memo(({ value, onChange }) => (
  <FormControl variant="standard" sx={{ ml: 1, mb: 1, minWidth: 140 }}>
    <InputLabel id="nationality">Nationality</InputLabel>
    <Select
      name="nationality"
      label="Nationality"
      value={value}
      onChange={onChange}
      labelId="nationality"
    >
      <MenuItem value="all">All</MenuItem>
      {Object.entries(NATIONALITIES_HUMAN_NAME).map(([nationality, name]) => (
        <MenuItem value={nationality} key={nationality}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
))

export const ContactsFilters = memo(
  ({ filters, updateFilter, clearFilters }) => {
    const handleChangeFilter = (event) => {
      updateFilter(event.target.name, event.target.value)
    }

    return (
      <Box display="flex" justifyContent="space-between" sx={{ mt: 5 }}>
        <Box>
          <FieldFullName
            value={filters.fullname}
            onChange={handleChangeFilter}
          />
          <FieldGender 
          value={filters.gender} 
          onChange={handleChangeFilter} 
            
          />
          <FieldNationality
            value={filters.nationality}
            onChange={handleChangeFilter}
          />
        </Box>
        <Button
          variant="outlined"
          startIcon={<Clear />}
          size="small"
          sx={{ ml: 1, mb: 1 }}
          onClick={clearFilters}
        >
          Clear
        </Button>
      </Box>
    )
  }
)

ContactsFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
}
