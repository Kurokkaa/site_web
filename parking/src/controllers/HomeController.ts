import { html, raw } from 'hono/html'
import { createFactory } from 'hono/factory'
import {generateHomeView} from '../views/Homeview'


const factory = createFactory()

const homeController = factory.createHandlers((c) => {
  return c.html(html`${generateHomeView()}`)
  }
)

export default homeController;