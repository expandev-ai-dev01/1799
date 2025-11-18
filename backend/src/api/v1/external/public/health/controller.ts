import { Request, Response } from 'express';
import { successResponse } from '@/utils/responseHandler';

/**
 * @api {get} /api/v1/external/public/health Health Check
 * @apiName HealthCheck
 * @apiGroup Public
 * @apiVersion 1.0.0
 *
 * @apiDescription Checks the health of the API.
 *
 * @apiSuccess {Boolean} success Indicates if the request was successful.
 * @apiSuccess {Object} data Response data.
 * @apiSuccess {String} data.status The health status.
 * @apiSuccess {String} data.timestamp The server timestamp.
 */
export function getHandler(req: Request, res: Response): void {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(successResponse(healthCheck));
}
