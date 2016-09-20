export default class KeybindController {
    events = {}
    keys = []

    constructor() {
        this.setEventListeners();
    }

    destroy() {
        this.unsetEventListeners();
    }

    keyDownHandler = (event) => {
        if (!this.keys.some(key => key === event.key.toLowerCase())) {
            this.keys = this.keys.concat(event.key.toLowerCase());
            this.growl('key added', this.keys);
        }
        this.fireHandlers(this.keys);
    }

    keyupHandler = (event) => {
        this.keys = this.keys.filter(key => key !== event.key.toLowerCase());
        this.growl('key removed', this.keys);
    }

    setEventListeners() {
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyupHandler);
    }

    unsetEventListeners() {
        window.removeEventListener('keydown', this.keyDownHandler);
        window.removeEventListener('keyup', this.keyupHandler);
    }

    fireHandlers = (keys) => {
        const keybind = keys.map(key => key.match(/(Meta|Control)/) ? 'super' : key).join('+');

        if (this.events[keybind]) {
            const selectedNodeType = document.activeElement.tagName.toLowerCase();
            if (selectedNodeType !== 'input') {
                this.events[keybind].forEach(handler => handler())
            }
        }
    }

    addKeybind = (keybind, handler) => {
        if (this.events[keybind]) {
            this.events[keybind] = this.events[keybind].concat(handler);
        } else {
            this.events[keybind] = [handler];
        }
    }

    removeKeybind = (keybind, handler) => {
        this.events[keybind] = this.events[keybind].filter(h => h !== handler);
        if (this.events[keybind].length <= 0) {
            delete this.events[keybind]
        }
    }

    growl = (...message) => true || console.info('[KB]:', ...message);
}
