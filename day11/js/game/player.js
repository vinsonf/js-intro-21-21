import { log } from "../view/helpers.js";

export class Player {
    #test = 'woow';
    health = 100;
    takeDamage() {
        console.log(this.#test)
        const health = 200;
        this.health -= Math.floor(Math.random() * 20);
        log(this.health, health, this);
        function test() {
            console.log(this);
        }
        test();
    }
}


