export class MenuComponent{
    menuItems = ['Home', 'About', 'Contact', 'Signup'];
    element = null;
    constructor() {
        this.element = document.createElement('ul');
        this.menuItems.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = item;
            this.element.appendChild(li);
        });
        document.body.appendChild(this.element);
    }

}