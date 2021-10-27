import { log } from "./helpers.js";


export function createElement(type) {
    log('Someone created an element of type', type);
    const element = document.createElement(type);
    return element;
}

export function appendChild(parent, child) {
    log('Someone appended an element', child, 'to', parent);
    parent.appendChild(child);
}