import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface OrderSaleProps {
    productId: UniqueEntityId 
    saleDate: Date
    orderQuantity: number 
    status: 'pending' | 'sent' | 'received'
    createdAt: Date
    updatedAt?: Date
}

export class OrderSale extends Entity<OrderSaleProps> {
    get questionId() {
        return this.props.productId
    }
    get saleDate() {
        return this.props.saleDate
    }
    get orderQuantity() {
        return this.props.orderQuantity
    }
    get status() {
        return this.props.status
    }
    get createdAt() {
        return this.props.createdAt
    }
    get updatedAt() {
        return this.props.updatedAt
    }

    static create(props: Optional<OrderSaleProps, 'createdAt'>, id?: UniqueEntityId) {
            const orderSale = new OrderSale({
                ...props,
                createdAt: new Date(),
            }, id)
    
            return orderSale
        }
}