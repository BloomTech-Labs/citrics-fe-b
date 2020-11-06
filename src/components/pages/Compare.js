import { Switch } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import CompareNav from '../common/CompareNav';
import PopulationViz from './PopulationViz';
import HomePriceViz from './HomePriceViz';
import IncomeViz from './IncomeViz';
import TemperatureViz from './TemperatureViz';
import Styled from 'styled-components';

const Compare = () => {
  return (
    <div>
      <CompareNav />

      <Route exact path="/compare/population">
        <PopulationViz />
      </Route>
      <Route exact path="/compare/avg-household-income">
        <IncomeViz />
      </Route>
      <Route exact path="/compare/avg-home-price">
        <HomePriceViz />
      </Route>
      <Route exact path="/compare/avg-temperature">
        <TemperatureViz />
      </Route>
    </div>
  );
};

export default Compare;
