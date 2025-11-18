import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import { config } from '@/config';
import { errorMiddleware, notFoundMiddleware } from '@/middleware';
import apiRoutes from '@/routes';

const app: Application = express();

// Security Middleware
app.use(helmet());
app.use(cors(config.api.cors));

// Request Processing Middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (config.env !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// API Routes with versioning
// This will create routes like:
// - /api/v1/external/...
// - /api/v1/internal/...
app.use('/api', apiRoutes);

// 404 Handler for unmatched routes
app.use(notFoundMiddleware);

// Centralized Error Handling
app.use(errorMiddleware);

const server = app.listen(config.api.port, () => {
  console.log(`Server running on port ${config.api.port} in ${config.env} mode`);
});

// Graceful Shutdown
const gracefulShutdown = () => {
  console.log('SIGTERM received, closing server gracefully.');
  server.close(() => {
    console.log('Server closed.');
    // Disconnect from database if applicable
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

export default app;
