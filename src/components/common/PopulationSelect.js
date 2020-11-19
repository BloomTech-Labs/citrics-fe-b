import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Styled from 'styled-components'

const StyledPopulation = Styled.div`
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

export default function PopulationSelect(props) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <StyledPopulation>
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
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={50000}>50k</MenuItem>
          <MenuItem value={75000}>75k</MenuItem>
          <MenuItem value={100000}>100k</MenuItem>
          <MenuItem value={250000}>250k</MenuItem>
          <MenuItem value={500000}>500k</MenuItem>
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
          <MenuItem value={10000000}>10M</MenuItem>
        </Select>
      </FormControl>
    </StyledPopulation>
  )
}
