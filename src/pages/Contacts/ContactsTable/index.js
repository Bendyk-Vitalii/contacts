import {
  Paper,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { format, parseISO } from "date-fns"
import { CopyToClipboardText } from "../../../component/ClipBoardText"
import { NATIONALITIES_HUMAN_NAME } from "../../../constants/nationality"


const useStyles = makeStyles({
  table: {},
})
export const ContactTable = ({ data }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(data)}
          {data.map((row) => (
            <TableRow
              key={row.login.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt={row.name.first + row.name.last}
                  src={row.picture.thumbnail}
                />
              </TableCell>
              <TableCell>
                {row.name.title + " " + row.name.first + " " + row.name.last}
              </TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(row.dob.date), "MM/dd/yyyy")}
                </Typography>
                <Typography>{row.dob.age} years</Typography>
              </TableCell>
              <TableCell>
              <CopyToClipboardText text={row.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={row.phone} />
              </TableCell>
              <TableCell>
              <Typography>{row.location.country}</Typography>
              <Typography>{row.location.city} {row.location.street.name} </Typography>
                </TableCell>
              <TableCell>{NATIONALITIES_HUMAN_NAME[row.nat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
