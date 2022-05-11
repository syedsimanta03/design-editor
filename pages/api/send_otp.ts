// This API route sends an OTP code to a specified number.
import type { NextApiRequest, NextApiResponse } from 'next';
import loadStytch from '../../lib/loadStytch';

type Data = {
  methodId: string;
};

type ErrorData = {
  errorString: string;
};

export async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorData>) {
  if (req.method === 'POST') {
    const client = loadStytch();
    const data = JSON.parse(req.body);
    try {
      // params are of type stytch.LoginOrCreateUserBySMSRequest
      const params = {
        email: `${data.email}`,
      };

      const resp = await client.otps.email.loginOrCreate(params);
      return res.status(200).json({ methodId: resp.email_id });
    } catch (error) {
      const errorString = JSON.stringify(error);
      console.log(error);
      return res.status(400).json({ errorString });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default handler;
