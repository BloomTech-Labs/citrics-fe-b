import axios from 'axios'

function getCostOfLivingBreakpoints(CLIArray) {}

export function getCLIArray() {
  axios
    .get('https://labs-28-citrics-b.herokuapp.com/cities/allid')
    .then(res => {
      const CLIArray = []
      const breakpoints = []
      console.log(res.data)
      res.data.map(city => CLIArray.push(city.costOfLivingIndex))
      console.log(CLIArray)
      const newArr = CLIArray.sort(function(a, b) {
        return a - b
      })
      console.log(newArr)
      breakpoints.push(newArr[Math.floor(newArr.length / 4)])
      breakpoints.push(newArr[Math.floor(newArr.length / 2)])
      breakpoints.push(newArr[Math.floor((newArr.length * 3) / 4)])
      return breakpoints
    })
    .catch(err => console.log(err))
}
