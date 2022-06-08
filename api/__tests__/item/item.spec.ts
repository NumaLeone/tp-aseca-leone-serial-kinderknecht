import {Context, createMockContext, MockContext} from "../../components/service/prisma.service";
import {ItemService} from "../../components/service/item.service";

let mockCtx: MockContext;
let ctx: Context;
let itemService: ItemService;

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
    itemService = new ItemService(ctx);
})

test('should create a new item', async () => {
    const item = {
        skuId: 'nksd',
        title: 'djks',
        brand: 'djndka',
        model: 'wdnjkle',
        specs: {
            spec1: 'spec'
        }
    }

    const result = await itemService.create(item);
    await expect(result).resolves.toEqual(item);
});