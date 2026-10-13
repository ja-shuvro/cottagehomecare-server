import { Router, Request, Response } from 'express';
import { authRoutes } from './auth-routes.js';
import { noteRoutes } from './note-routes.js';
import { ApiResponse } from '../utils/api-response.js';

const apiRouter = Router();

apiRouter.get('/health', (req: Request, res: Response) => {
  ApiResponse.success(res, 'Secure Notes API operational', {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

apiRouter.use('/auth', authRoutes);
apiRouter.use('/notes', noteRoutes);

export { apiRouter };
