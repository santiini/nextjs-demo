/**
 * 404和500错误客户端和服务端都会通过error.js组件处理。
 * 如果你想改写它，则在pages文件下新建_error.js，当用户访问错误路由时会访问_error页面
 *
 * @format
 */

import React from 'react';

class Error extends React.Component {
  static getInitialProps({res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {statusCode};
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;
