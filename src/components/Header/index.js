// == Import npm
import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

// == Import
import './style.scss';

// == Composant
const HeaderC = () => (
  <Header as='h1' className="header">
    Todo Reactively <Icon name="tachometer alternate" />
  </Header>
);

// == Export
export default HeaderC;
