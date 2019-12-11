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
import Link from 'next/link';

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
        <Row>
          <div>前往其他页面： </div>
          {/*
            1. <Link> 组件可以实现路由跳转
            2. <Link> 的 replace 属性可以替换当前路由
            3. prefetch 允许 Next.js 后台预加载页面，getInitialProps 也在服务端渲染
            4. prefetch 方法：router.prefetch('/dynamic')
            5. 建议 prefetch 事件写在componentDidMount()生命周期里。
            6. tips: 只有生产环境才有此功能 -- prefetch
          */}
          <Link prefetch href="/product">
            <a>Product</a>
          </Link>
          <Link prefetch href="/member">
            <a>Member</a>
          </Link>
        </Row>
      </div>
    );
  }
}

export default Team;
