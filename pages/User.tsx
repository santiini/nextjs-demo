/** @format */

import React, {FC} from 'react';
import {Row} from 'antd';
import Head from 'next/head';

interface UserProps {}
const User: FC<UserProps> = () => {
  return (
    <div>
      <Head>
        <title>User Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>User Page</Row>
    </div>
  );
};

export default User;
