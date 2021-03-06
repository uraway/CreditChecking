/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import { TwitterButton } from 'react-social-buttons';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>Facebookが提供する<a href="https://facebook.github.io/react/">React.js</a>とGoogleが提供する<a href="http://www.material-ui.com">MaterialUI</a>を使用したMITライセンスのアプリケーションです｡</p>
        <p>PC推奨ですが､ スマホの場合は横向きにすると少し見やすくなります｡</p>
        <p>フィードバック､ 大学･学部追加のリクエストは<a href="https://twitter.com/uraway_">こちら</a>まで｡ もしくは #単位チェッカー でツイートしてください｡</p>
          <FlatButton
            label="GitHub Link"
            linkButton={true}
            href="https://github.com/uraway/CreditChecking"
            secondary={true}
            icon={<FontIcon className="muidocs-icon-custom-github" />}
          />
      </div>
    );
  }

}
