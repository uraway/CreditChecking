/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../components/Link';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class extends Component {

  render() {
    return (
      <List>
        <ListItem
          primaryText="神戸大学 国際文化学部"
          href="/uni/kokubun"
        />
    </List>
    );
  }
}
