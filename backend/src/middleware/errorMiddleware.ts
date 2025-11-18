import { Request, Response, NextFunction } from 'express';
import { config } from '@/config';
import { errorResponse } from '@/utils/responseHandler';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  console.error(err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'Internal Server Error';

  res
    .status(statusCode)
    .json(
      errorResponse('ServerError', message, config.env !== 'production' ? err.stack : undefined)
    );
}
