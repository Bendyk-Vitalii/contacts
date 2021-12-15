import { useState } from "react"
import { Container, Grid, Box, Typography } from "@mui/material"
import { useStyles } from "./ContactsStyle"
import { useContacts } from "./useContacts"
import { ContactTable } from "./ContactsTable/index"
import { CircularProgress } from "@mui/material"
import { ToggleDataViewMode } from "./ToggleDataViewMode"
import { useDataViewMode } from "./useDataViewMode"
import { DATA_VIEW_MODE } from "./constants"
import { ContactsFilters } from "./ContactsFilters"
import { GridView } from "./ContactsGrid"
const FiltersDefaultValue = {
  fullname: "",
  gender: "all",
}

const filterByFullname = ({ first, last }, fullname) => {
  return (
    first?.toLowerCase().includes(fullname.toLowerCase()) ||
    last?.toLowerCase().includes(fullname.toLowerCase())
  )
}

const filterByGender = (value, gender) => {
  if (gender === "all") {
    return true
  }
  return value === gender
}

export const Contacts = () => {

  const contacts = useContacts()
  const classes = useStyles()
  const [dataViewMode, setDataViewMode] = useDataViewMode()

  const [filters, setFilters] = useState(FiltersDefaultValue)

  const updateFilter = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const filteredContacts = contacts.data
  .filter((item) => filterByFullname(item.name, filters.fullname))
  .filter((item) => filterByGender(item.gender, filters.gender))

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h3" component="h1">
              Contacts
            </Typography>
            <ToggleDataViewMode
              dataViewMode={dataViewMode}
              setDataViewMode={setDataViewMode}
            />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.filtersContainer}>
    <ContactsFilters filters={filters} updateFilter={updateFilter} />
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress data-testid="contacts-loader" />
            }

            if (contacts.data.isError) {
              return <div>...error</div>
            }

            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
              return <ContactTable data={filteredContacts} />
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return <GridView data={filteredContacts} />
            }
            return null
          })()}
        </Grid>
      </Grid>
    </Container>
  )
}
