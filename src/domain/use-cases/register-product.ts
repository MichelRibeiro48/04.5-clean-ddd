import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { CreateProductRepository } from "../repositories/create-product"
import { Product } from "../entities/product"

interface RegisterProductUseCaseRequest{
    productId: string
    name: string
    size: string
    color: string
}

export class RegisterProductUseCase {
    constructor(
        private createProductRepository: CreateProductRepository
    ) {}

    async execute({ size, productId, color, name }: RegisterProductUseCaseRequest) {

        const product = new Product({productId: new UniqueEntityId(productId), name, size, color })
        
        await this.createProductRepository.create(product)

        return product
        
    }
}