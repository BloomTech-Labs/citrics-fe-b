import React from 'react';
import LandingPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <LandingPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <LandingPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <LandingPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
