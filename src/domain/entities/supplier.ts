import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface SupplierProps {
    supplierId: UniqueEntityId 
    name: string
    contact: string 
    deliveryTime: Date
    createdAt: Date
    updatedAt?: Date
}

export class Supplier extends Entity<SupplierProps> {
    get supplierId() {
        return this.props.supplierId
    }
    get name() {
        return this.props.name
    }
    get contact() {
        return this.props.contact
    }
    get deliveryTime() {
        return this.props.deliveryTime
    }
    get createdAt() {
        return this.props.createdAt
    }
    get updatedAt() {
        return this.props.updatedAt
    }

    static create(props: Optional<SupplierProps, 'createdAt'>, id?: UniqueEntityId) {
            const supplier = new Supplier({
                ...props,
                createdAt: new Date(),
            }, id)
    
            return supplier
        }
}