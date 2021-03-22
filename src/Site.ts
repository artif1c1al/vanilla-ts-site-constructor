import {stringToHTML} from "./utils";

const message = '<h1>Hello World</h1>'

export class Site {
  selector: string
  $el: HTMLElement

  constructor(selector: string) {
    this.selector = selector
    console.log(selector)
    this.$el = document.querySelector(selector) as HTMLElement
  }

  render = () => {
    this.$el.insertAdjacentElement('afterbegin', stringToHTML(message))
  }
}
