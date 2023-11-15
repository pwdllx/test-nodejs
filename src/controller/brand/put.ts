import { ERROR } from '@const';
import { BrandRepository } from '@repository';
import { NextFunction, Request, Response } from 'express';

import { Brand } from '../../model/brand';

export async function addBrand(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const brand = new Brand(req.body.title);
    const brandRepo = new BrandRepository();
    const data = await brandRepo.create(brand);
    res.json(data);
  } catch (error) {
    next(ERROR.HTTP_500);
  }
}
