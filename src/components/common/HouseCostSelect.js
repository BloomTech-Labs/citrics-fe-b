import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Styled from 'styled-components'

const StyledHouse = Styled.div`
.simpleSelect {
    background-color: #5BDB95;
    color: white;
}
`

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))
export default function HouseCostSelect(props) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <StyledHouse>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.min}
          onChange={props.onChange}
          name={props.minName}
          className="simpleSelect"
        >
          <MenuItem value="">
            <em>Min</em>
          </MenuItem>
          <MenuItem value={90000}>90K</MenuItem>
          <MenuItem value={100000}>100K</MenuItem>
          <MenuItem value={200000}>200K</MenuItem>
          <MenuItem value={400000}>400K</MenuItem>
          <MenuItem value={750000}>750K</MenuItem>
          <MenuItem value={1000000}>1M</MenuItem>
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
          className="simpleSelect"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100000}>100K</MenuItem>
          <MenuItem value={250000}>250K</MenuItem>
          <MenuItem value={500000}>500K</MenuItem>
          <MenuItem value={750000}>750K</MenuItem>
          <MenuItem value={1000000}>1M</MenuItem>
          <MenuItem value={1500000}>1.5M</MenuItem>
          <MenuItem value={2000000}>2M</MenuItem>
          <MenuItem value={3000000}>3M</MenuItem>
        </Select>
      </FormControl>
    </StyledHouse>
  )
}
