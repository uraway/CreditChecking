/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>MITライセンスのアプリケーションです｡</p>
        <p>PC推奨ですが､ スマホの場合は横向きにすると少し見やすくなります｡</p>
        <p>フィードバック､ 大学･学部追加のリクエストは<a href="https://twitter.com/uraway_">こちら</a>まで｡ もしくは #単位チェッカーリクエスト でツイートしてください｡</p>
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
