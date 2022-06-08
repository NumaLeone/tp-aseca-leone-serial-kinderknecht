import {Context} from "../service/prisma.service";

export class ItemRepository {

    context: Context

    constructor(ctx: Context) {
        this.context = ctx;
    }

    public findBySkuId(skuId: number) {
        return this.context.prisma.item.findUnique({
            where: {
                skuId,
            }
        })
    }

    create(item: any) {
        return this.context.prisma.item.create({
            data: item
        })
    }
}