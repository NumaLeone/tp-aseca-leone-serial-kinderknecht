import { Request, Response } from 'express';
import { ValidationError } from "../utils/errors";
import { OK } from "../utils/status-codes";
import { ItemService } from "../service/item.service";
import { Context } from "../service/prisma.service";

export class ItemController {

    itemService: ItemService;

    constructor(ctx: Context) {
        this.itemService = new ItemService(ctx);
    }

    public getItem(req: Request, res: Response) {
        const { skuId } = req.params;
        if (!skuId) throw new ValidationError('skuId')

        return res.status(OK).json(this.itemService.getItem(skuId as number))
    }

}