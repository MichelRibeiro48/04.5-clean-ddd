import { Entity } from "@/core/entities/entity"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"
import { Slug } from "./value-objects/slug"

interface StockProps {
    stockId: UniqueEntityId 
    movement: Date
    totalQuantity: number
}

export class Stock extends Entity<StockProps> {
    get stockId() {
        return this.props.stockId
    }
    get movement() {
        return this.props.movement
    }
    get totalQuantity() {
        return this.props.totalQuantity
    }

    private touch() {
        this.props.movement = new Date()
    }

    set totalQuantity(totalQuantity: number) {
        this.props.totalQuantity = totalQuantity
        this.touch()
    }

    static create(props: StockProps) {
        const stock = new Stock(props, props.stockId)

        return stock
    }
}