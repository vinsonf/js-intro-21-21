import { primitives } from "./game/datatypes.js";
import { log } from "./view/helpers.js";
import { appendChild, createElement } from "./view/html.js";
import { Player } from "./game/player.js";
import { MenuComponent } from "./view/menu.component.js";
import * as reg from './regex.js';


// const h1 = createElement('h1');
const player1 = new Player();
player1.takeDamage();

// new MenuComponent();

// console.log(player1.#health);




