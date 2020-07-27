import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../lib/auth0';

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await auth0.handleLogin(req, res);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).end(err.message);
  }
}
