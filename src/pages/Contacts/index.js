import { Paper, Container, Grid, Box, Typography } from "@mui/material"
import { theme, useStyles } from "./ContactsStyle"
import { useContacts } from "./useContacts"
import { ContactTable } from "./ContactsTable/index"

export const Contacts = () => {
  const contacts = useContacts()
  const classes = useStyles()
  
  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>...loading</div>
            }

            if (contacts.data.isError) {
              return <div>...error</div>
            }
            return <ContactTable data={contacts.data} />

          })()}
          
        </Grid>
      </Grid>
    </Container>
  )
}
