import { CreateProductRepository } from "../repositories/create-product";
import { RegisterProductUseCase } from "./register-product";
import { randomUUID } from "crypto";
import { Product } from "../entities/product";

const fakeCreateProductRespository: CreateProductRepository = {
    create: async (product: Product) => {
        return;
    },
}

test('create an answer', async () => {
    const createProduct = new RegisterProductUseCase(fakeCreateProductRespository)

    const product = await createProduct.execute({
        productId: randomUUID(),
        color: 'blue',
        name: 'Borracha',
        size: "grande"
    })

    console.log(product)

    expect(product).not.toBeNull();
    expect(product.name).toEqual('Borracha')
})