import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../lib/auth0';

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await auth0.handleLogout(req, res);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).end(err.message);
  }
}
