import { Product } from "../entities/product";

export interface CreateProductRepository {
    create(product: Product): Promise<void>
}