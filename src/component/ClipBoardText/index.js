import { Box } from "@mui/system"
import { PropTypes } from "prop-types"
import { FileCopyOutlined } from "@mui/icons-material"
import { createStyles, makeStyles } from "@mui/styles"
import { useCopyToClipboard } from "react-use"
import Tooltip from "@mui/material/Tooltip"
import { Button } from "@mui/material"
import { forwardRef, useState, useCallback } from "react"

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

// const CopyToClipboardTextView = forwardRef(function MyComponent(props, ref) {
//   return (
//     <div {...props} ref={ref}>
//         {props.children}
//     </div>
//   )
// })

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles()
  const [state, copyToClipboard] = useCopyToClipboard()
  const [statusCopy, setStatusCopy] = useState("copy")

  const tooltipTitle = () => {
    switch (statusCopy) {
      case "copy":
        return "Copy"
      case "copied":
        return "Copied"
      default:
        return ";"
    }
  }

  const onClickCopy = useCallback(() => {
    copyToClipboard(text)
    setStatusCopy("copied")
  }, [copyToClipboard, text])

  const onMouseLeaveCopy = useCallback(() => {
    setStatusCopy("copy")
  }, [setStatusCopy])

  return (
    <Tooltip title={tooltipTitle()} arrow>
      <Button
        display="flex"
        className={classes.root}
        onClick={onClickCopy}
        onMouseLeave={onMouseLeaveCopy}
      >
        <FileCopyOutlined fontSize="small" className={classes.icon} />
        {text}
      </Button>
    </Tooltip>
  )
}

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
}
