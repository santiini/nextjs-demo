/**
 * api
 *
 * @format
 */

import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.query);
    const txt = fs.readFileSync(
      path.resolve(process.env.ROOTDIR || '', 'pages/api/post/test.txt'),
      'utf8',
    );

    // console.log(txt);
    // const txt = 'Text txt';

    res.status(200).json({
      data: txt,
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({message: 'Not Found'});
  }
};
