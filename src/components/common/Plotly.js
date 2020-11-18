import React, { useState } from 'react'
import Plot from 'react-plotly.js'

import {
  CloudOutlined,
  HomeOutlined,
  TeamOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'

import { Switch } from 'antd'
// import { PlotlyCard } from '../../../archive/src/components/common';

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
  // const theme = useSelector(state => state.theme);
  // const cardHeight = 64 * data.length;
  // const sty = styles(display, theme);

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

  const graphTypeHandler = () => {
    if (graphTypeState === 'bar') {
      setGraphTypeState('line')
    }
    if (graphTypeState === 'line') {
      setGraphTypeState('bar')
    }
  }

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
        {icons[graphLabel]}
        <h3 className="plotlyName">{graphLabel}</h3>
        <div className="antdSwitch">
          <Switch
            checkedChildren="Historical"
            size="small"
            onChange={graphTypeHandler}
            disabled={data.length === 0 ? true : false}
          />
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
                  mode: 'lines+points',
                  marker: {
                    color: citydata.color,
                  },
                  // name: `${citydata.cityname}, ${citydata.citystate}`,
                  orientation: 'h',
                  hoverinfo: 'skip',
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
                  // name: `${citydata.cityname}, ${citydata.citystate}`,
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
