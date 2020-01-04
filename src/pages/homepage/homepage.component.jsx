import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
//using styled component trying

<HomePageContainer>
<Directory />
</HomePageContainer>
// Using stles sass..
  // <div className='homepage'>
  //   <Directory />
  // </div>
);

export default HomePage;
