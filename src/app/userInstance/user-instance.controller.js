/**
 * Слой контроллер, содержит приватным полем экземпляр сервиса.
 * Контроллер импортируется в слой view.
 *
 * Минимальная реализация контроллера - повторяем все методы сервиса, вызывая их, и возвращая полученное значение.
 *
 * В этом слое можно создавать специфические методы для обработки произвольных событий из слоя view.
 */
import UserInstanceService from "@/app/userInstance/user-instance.service";

class UserInstanceController {

    #service = new UserInstanceService()
    
    async login(credentials) {
        return this.#service.login(credentials)
    }
    
    async register(user) {
        return this.#service.register(user)
    }
    
}

export const userInstanceController = new UserInstanceController()