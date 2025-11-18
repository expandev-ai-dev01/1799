import { Router } from 'express';
import * as healthController from '@/api/v1/external/public/health/controller';

const router = Router();

// Health check route
router.get('/public/health', healthController.getHandler);

// ADD FEATURE-SPECIFIC PUBLIC ROUTES HERE

export default router;
