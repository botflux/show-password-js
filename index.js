const baseConfig = {
    buttonSelector: '[data-show-password]',
    inputSelector: '[data-input-password]',
}

class ShowPasswordManager {
    constructor (config = baseConfig) {
        this.config = config
        this.buttons = document.querySelectorAll(config.buttonSelector)
        
        this.buttons && this.buttons.forEach && this.buttons.forEach (b => {
            // get the id of the button
            let buttonID = b.getAttribute(this.trimAttribute(this.config.buttonSelector))
            // get the input matching the button id
            let input = document.querySelector(`[${this.trimAttribute(this.config.inputSelector)}="${buttonID}"]`)

            input && b.addEventListener && b.addEventListener('click', () => {
                this.togglePasswordAttribute(input)
            })
        })
    }

    togglePasswordAttribute (input) {
        let a = input.getAttribute('type')
        input.setAttribute('type', a === 'password' ? 'text' : 'password')
    }

    trimAttribute (attr) {
        return attr.replace(/[\[\]]+/g, '')
    }
}