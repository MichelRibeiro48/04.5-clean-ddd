import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface ClientProps {
    clientId: UniqueEntityId 
    name: string
    contact: string 
    createdAt: Date
    updatedAt?: Date
}

export class Client extends Entity<ClientProps> {
    get clientId() {
        return this.props.clientId
    }
    get name() {
        return this.props.name
    }
    get contact() {
        return this.props.contact
    }
    get createdAt() {
        return this.props.createdAt
    }
    get updatedAt() {
        return this.props.updatedAt
    }

    static create(props: Optional<ClientProps, 'createdAt'>, id?: UniqueEntityId) {
            const client = new Client({
                ...props,
                createdAt: new Date(),
            }, id)
    
            return client
        }
}