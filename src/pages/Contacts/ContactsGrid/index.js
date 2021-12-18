import { Grid, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/material/styles"
import { Box, Card, CardContent, Avatar, Paper, Divider } from "@mui/material"
import { CopyToClipboardText } from "../../../component/ClipBoardText"
import { NATIONALITIES_HUMAN_NAME } from "../../../constants/nationality"
import { format, parseISO } from "date-fns"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export const GridView = ({ data }) => {
  return (
    <Grid container sx={{ justifyContent: 'center', mt:1 }}>
      {data.map((row) => {
        return (
          <Grid item xl="4" lg="3" key={row.login.uuid} sx={{ margin:5 }}>
            <Item>
              <Card
                sx={{
                  maxWidth: {
                    xs: "75vw",
                    sm: "80vw",
                    md: "45vw",
                    lg: "50vw",
                    xl: "45vw",
                  },
                }}
              >
                <CardContent>
                  <Avatar src={row.picture.thumbnail} />
                  <h3>
                    {row.name.title +
                      " " +
                      row.name.first +
                      " " +
                      row.name.last}
                  </h3>
                  <span>{NATIONALITIES_HUMAN_NAME[row.nat]}</span>
                </CardContent>
                <Divider light />

                <Box p={2} flex={"auto"} flexDirection={"column"}>
                  <Typography>Birthday</Typography>
                  <Typography>
                    {format(parseISO(row.dob.date), "MM/dd/yyyy")}
                  </Typography>
                  <Typography>{row.dob.age} years</Typography>
                </Box>
                <Box flexDirection={row}>
                  <Box flex={"auto"}>
                    <Box >
                      <Typography>Email</Typography>
                      <Typography>
                        <CopyToClipboardText text={row.email} />
                      </Typography>
                    </Box>

                    <Box p={1} flex={"auto"}>
                      <Typography>Phone</Typography>
                      <Typography>
                        <CopyToClipboardText text={row.phone} />
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />

                  <Box display={"flex"}>
                    <Box p={2} flex={"auto"}>
                      <Typography>Location</Typography>
                      <Typography>{row.location.country}</Typography>
                      <Typography>
                        {row.location.city} {row.location.street.name}
                      </Typography>
                    </Box>
                    <Box p={1} flex={"auto"}>
                      <Typography>Nationality</Typography>
                      <Typography>
                        {NATIONALITIES_HUMAN_NAME[row.nat]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Item>
          </Grid>
        )
      })}
    </Grid>
  )
}
