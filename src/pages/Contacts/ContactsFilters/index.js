import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem 
  } from "@mui/material"
import PropTypes  from "prop-types"

export const ContactsFilters = ({ filters, updateFilter }) => {

    const handleChangeFilter = (event) => {
        updateFilter(event.target.name, event.target.value)
      }

    return (
        <Box display="flex">
        <TextField
        name="fullname"
        label="Fullname"
        variant="outlined"
        value={filters.fullname}
        onChange={handleChangeFilter}
        sx={{ mt: 1, mb: 1}}
        size="small"
      />
      <FormControl variant="standard" sx={{ ml: 1, mb: 1, minWidth: 120 }}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          name="gender"
          label="Gender"
          value={filters.gender}
          onChange={handleChangeFilter}
          labelId="gender"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      </Box>
    )
}

ContactsFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    updateFilter: PropTypes.func.isRequired,
}