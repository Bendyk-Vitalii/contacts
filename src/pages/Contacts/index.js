import { Container, Grid, Box, Typography } from "@mui/material"
import { useStyles } from "./ContactsStyle"
import { useContacts } from "./useContacts"
import { ContactTable } from "./ContactsTable/index"
import { CircularProgress } from '@mui/material'
import { ToggleDataViewMode } from './ToggleDataViewMode'
import { useDataViewMode } from "./useDataViewMode"
import { DATA_VIEW_MODE } from "./constants"

export const Contacts = () => {
  const contacts = useContacts()
  const classes = useStyles()
  const [dataViewMode, setDataViewMode] = useDataViewMode()


  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
         <ToggleDataViewMode dataViewMode={dataViewMode} setDataViewMode={setDataViewMode} />
    </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return < CircularProgress />
            }

            if (contacts.data.isError) {
              return <div>...error</div>
            }
            
            if (dataViewMode === DATA_VIEW_MODE.TABLE) {
             return <ContactTable data={contacts.data} />
            }
            if (dataViewMode === DATA_VIEW_MODE.GRID) {
              return "grid"
            }
            return null
          })()}
          
        </Grid>
      </Grid>
    </Container>
  )
}
