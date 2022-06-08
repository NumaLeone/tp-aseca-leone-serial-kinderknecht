import {ItemRepository} from "../repository/item.repository";
import {DatabaseError, NotFoundError} from "../utils/errors";
import {Context} from "./prisma.service";

export class ItemService {

    private itemRepository: ItemRepository;

    constructor(ctx: Context) {
        this.itemRepository = new ItemRepository(ctx);
    }

    public getBySkuId(skuId: number) {
        try {
            const item = this.itemRepository.findBySkuId(skuId);
            if (!item) throw new NotFoundError('Item');
            return item;
        } catch (e) {
            if (e instanceof NotFoundError) throw e;
            throw new DatabaseError(e.message);
        }
    }

    public create(itemobj: object) {
        try {
            return this.itemRepository.create(itemobj);
        } catch (e) {
            throw new DatabaseError(e.message)
        }
    }

}