import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'

import {
  CloudOutlined,
  HomeOutlined,
  TeamOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'

const icons = {
  Population: <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Household Income': (
    <DollarCircleOutlined style={{ fontSize: '1.5rem' }} />
  ),
  'Average Temperature': <CloudOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Home Price': <HomeOutlined style={{ fontSize: '1.5rem' }} />,
}

const Plotly = props => {
  const { graphLabel, data } = props
  const [graphTypeState, setGraphTypeState] = useState('bar')

  const relativeProperty = () => {
    switch (graphLabel) {
      case 'Population':
        return graphTypeState === 'line' ? 'populationHistory' : 'population'
      case 'Average Household Income':
        return graphTypeState === 'line'
          ? 'historicalIncome'
          : 'householdIncome'
      case 'Average Temperature':
        return graphTypeState === 'line'
          ? 'historicalWeather'
          : 'averageTemperature'
      case 'Average Home Price':
        return graphTypeState === 'line'
          ? 'historicalHomeCost'
          : 'averageHomeCost'
      default:
        return
    }
  }

  useEffect(() => {
    if (graphTypeState === 'bar') {
      document.querySelector('.averageBtn').style.backgroundColor = '#05386B'
      document.querySelector('.averageBtn').style.color = 'white'
      document.querySelector('.historicalBtn').style.backgroundColor = '#5BDB95'
      document.querySelector('.historicalBtn').style.color = 'black'
    }
    if (graphTypeState === 'scatter') {
      document.querySelector('.historicalBtn').style.backgroundColor = '#05386B'
      document.querySelector('.historicalBtn').style.color = 'white'
      document.querySelector('.averageBtn').style.backgroundColor = '#5BDB95'
      document.querySelector('.averageBtn').style.color = 'black'
    }
  }, [graphTypeState])

  const relativePropertyLineGraph = {
    historicalWeather: {
      x: 'month',
      y: 'temperature',
    },
    populationHistory: {
      x: 'year',
      y: 'population',
    },
    historicalHomeCost: {
      x: 'year',
      y: 'homeCost',
    },
    historicalIncome: {
      x: 'year',
      y: 'householdIncome',
    },
  }

  return (
    <div className="card">
      <div className="cardInfo">
        <h3 className="plotlyName">
          {icons[graphLabel]} {graphLabel}
        </h3>
        <div className="historicalAveBar">
          <button
            className="averageBtn"
            onClick={evt => {
              evt.preventDefault()
              if (graphTypeState === 'line') {
                setGraphTypeState('bar')
              }
            }}
          >
            Average
          </button>
          <button
            className="historicalBtn"
            onClick={evt => {
              evt.preventDefault()
              if (graphTypeState === 'bar') {
                setGraphTypeState('line')
              }
            }}
          >
            Historical
          </button>
        </div>
      </div>

      <div className="plotContainer">
        <Plot
          data={data.map(citydata => {
            return graphTypeState === 'line' &&
              citydata[relativeProperty()] !== undefined
              ? /// LINE GRAPH
                {
                  x: citydata[relativeProperty()].map(value => {
                    return value[
                      relativePropertyLineGraph[relativeProperty()].x
                    ]
                  }),
                  y: citydata[relativeProperty()].map(value => {
                    return value[
                      relativePropertyLineGraph[relativeProperty()].y
                    ]
                  }),
                  type: graphTypeState,
                  mode: 'lines+markers',
                  marker: {
                    color: citydata.color,
                  },
                  name: `${citydata.cityname}, ${citydata.citystate}`,
                  orientation: 'h',
                  hoverinfo: 'x+y',
                  showlegend: false,
                }
              : {
                  /// BAR GRAPH
                  x: [citydata[relativeProperty()]],
                  y: [citydata['cityName']],
                  type: graphTypeState,
                  mode: 'markers',
                  marker: {
                    color: citydata.color,
                  },
                  name: `${citydata.cityname}, ${citydata.citystate}`,
                  orientation: 'h',
                  // hoverinfo: 'skip',
                  showlegend: false,
                }
          })}
          layout={{
            plot_bgcolor: 'transparent',
            paper_bgcolor: 'transparent',
            autosize: true,
            margin: { l: 25, t: 25, r: 25, b: 25 },
            yaxis: {
              automargin: true,
              visible: true,
              gridcolor: '#ffffff20',
            },
            xaxis: {
              automargin: true,
              visible: true,
              gridcolor: '#ffffff20',
            },
            font: {
              color: '#ffffff80',
            },
            line: {
              color: 'white',
            },
          }}
          useResizeHandler
          style={{
            width: '100%',
            height: `50vh`,
          }}
          config={{
            displayModeBar: false,
            staticPlot: true,
            responsive: true,
          }}
        />
      </div>
    </div>
  )
}

export default Plotly
