import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"
import { Slug } from "./value-objects/slug"

interface ProductProps {
    productId: UniqueEntityId 
    name: string
    quantityStock: number 
    minQuantityInStock: number
    size: string
    color: string
    price: number
    createdAt: Date
    updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
    get productId() {
        return this.props.productId
    }
    get name() {
        return this.props.name
    }
    get quantityStock() {
        return this.props.quantityStock
    }
    get minQuantityInStock() {
        return this.props.minQuantityInStock
    }
    get size() {
        return this.props.size
    }
    get color() {
        return this.props.color
    }
    get price() {
        return this.props.price
    }
    get updatedAt() {
        return this.props.updatedAt
    }

    private touch() {
        this.props.updatedAt = new Date()
    }

    set quantityStock(quantityStock: number) {
        this.props.quantityStock = quantityStock
        this.touch()
    }

    set minQuantityInStock(minQuantityInStock: number) {
        this.props.minQuantityInStock = minQuantityInStock
    }

    set bestAnswerId(productId: UniqueEntityId) {
        this.props.productId = productId
    }

    set content(size: string) {
        this.props.size = size
    }

    set color(color: string) {
        this.props.color = color
    }

    static create(props: Optional<ProductProps, 'createdAt'>) {
        const product = new Product({
            ...props,
            createdAt: new Date(),
        }, props.productId)

        return product
    }
}