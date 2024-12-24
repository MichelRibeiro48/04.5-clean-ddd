import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface SaleProps {
    productId: UniqueEntityId 
    saleDate: Date
    saleQuantity: number 
    profit: number
    createdAt: Date
    updatedAt?: Date
}

export class Sale extends Entity<SaleProps> {
    get questionId() {
        return this.props.productId
    }
    get saleDate() {
        return this.props.saleDate
    }
    get saleQuantity() {
        return this.props.saleQuantity
    }
    get profit() {
        return this.props.profit
    }
    get updatedAt() {
        return this.props.updatedAt
    }

    static create(props: Optional<SaleProps, 'createdAt'>, id?: UniqueEntityId) {
            const sale = new Sale({
                ...props,
                createdAt: new Date(),
            }, id)
    
            return sale
        }
}