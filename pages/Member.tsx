/** @format */

import React from 'react';
import Link from 'next/link';

class Member extends React.Component {
  render() {
    return (
      <div>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </div>
    );
  }
}

export default Member;
