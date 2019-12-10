/**
 * getInitialProps 异步方法
 *   1. getInitialProps将会把数据序列化，就像JSON.stringify。
 *   2. 确保getInitialProps返回的是一个普通 JS 对象，而不是Date, Map 或 Set类型。
 *   3. 当页面初始化加载时，getInitialProps只会加载在服务端。
 *      只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps。
 *   4. getInitialProps将不能使用在子组件中。只能使用在pages页面中。
 *  @format */

import React from 'react';
import {Row} from 'antd';

class Team extends React.Component<any> {
  static async getInitialProps({req}: any) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {
      userAgent,
    };
  }

  render() {
    return (
      <div>
        <Row>Team Page</Row>
        <Row>{this.props.userAgent}</Row>
      </div>
    );
  }
}

export default Team;
