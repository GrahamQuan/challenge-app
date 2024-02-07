import type { Request, Response, NextFunction } from 'express';

export const log = (req: Request, res: Response, next: NextFunction) => {
  console.log({
    method: req.method,
    url: req.url,
  });

  next();
};
