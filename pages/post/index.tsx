/** @format */

import React from 'react';
import {NextPage} from 'next';
import fetch from 'isomorphic-unfetch';

interface PostDetailProps {
  data: string;
}
const PostDetail: NextPage<PostDetailProps> = props => {
  return (
    <div>
      <h2>Post</h2>
      <p>{props.data}</p>
    </div>
  );
};

PostDetail.getInitialProps = async () => {
  try {
    const res = await fetch('http://localhost:3003/api/post').then(res => res.json());
    return {
      data: res.data,
    };
  } catch (err) {
    return {
      data: '',
    };
  }
};

export default PostDetail;
