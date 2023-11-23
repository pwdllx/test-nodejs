import { Request, Response } from 'express';

interface ErrorResponse {
  code: number;
  message: string;
}

export function restJson(
  err: ErrorResponse,
  _req: Request,
  res: Response
): void {
  res.status(err.code || 500); 
  res.json({
    error: {
      code: err.code || 500,
      message: err.message || 'Internal Server Error',
    },
  });
}