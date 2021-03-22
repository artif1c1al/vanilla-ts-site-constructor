import {Site} from "./Site";

export class App {
  model: string | null
  site: any
  constructor(model = null) {
    this.model = model
    this.site = new Site('#site')
  }
}
