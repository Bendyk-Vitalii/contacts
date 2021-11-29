import { PropTypes } from "prop-types"
import { FileCopyOutlined } from "@mui/icons-material"
import { createStyles, makeStyles } from "@mui/styles"
import { useCopyToClipboard } from "react-use"
import Tooltip from "@mui/material/Tooltip"
import { Button } from "@mui/material"
import { useState, useCallback } from "react"
import { ClickAwayListener } from "@material-ui/core"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    // icon: {
    //     // marginRight: theme.spacing(1),
    // },
  })
)

const STATUS_COPY = {
COPY: "copy",
COPIED: "copied",
}

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
}

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles()
  const [, copyToClipboard] = useCopyToClipboard()
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY)

  const onClickCopy = useCallback(() => {
    copyToClipboard(text)
    setStatusCopy(STATUS_COPY.COPIED)
  }, [copyToClipboard, text])

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY)
  }, [setStatusCopy])

  return (
      <ClickAwayListener onClickAway={onClickAway}>
    <Tooltip title={TITLE_BY_STATUS[statusCopy]} arrow>
      <Button
        display="flex"
        className={classes.root}
        onClick={onClickCopy}
      >
        <FileCopyOutlined fontSize="small" className={classes.icon} />
        {text}
      </Button>
    </Tooltip>
    </ClickAwayListener>
  )
}

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
}
