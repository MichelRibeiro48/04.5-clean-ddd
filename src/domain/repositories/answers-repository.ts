import { Answer } from "../entities/sale";

export interface AnswersRepository {
    create(answer: Answer): Promise<void>
    validateById(id: string): Promise<boolean>
}