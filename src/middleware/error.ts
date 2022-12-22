import { Request, Response } from 'express';

export function restJson(
  err: { code: number; message: string },
  req: Request,
  res: Response
): void {
  res.status(200);
  res.json(err);
}
