import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SimpleSelect(props) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.min}
          onChange={props.onChange}
          name={props.minName}
        >
          <MenuItem value="">
            <em>Min</em>
          </MenuItem>
          <MenuItem value={50000}>50K</MenuItem>
          <MenuItem value={60000}>60K</MenuItem>
          <MenuItem value={70000}>70k</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Max</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.max}
          onChange={props.onChange}
          name={props.maxName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100000}>100K</MenuItem>
          <MenuItem value={150000}>150K</MenuItem>
          <MenuItem value={200000}>200K</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
