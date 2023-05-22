import type { App } from 'vue'
import Grid from './Grid'
import GridItem from './GridItem'

Grid.Item = GridItem
Grid.install = (app: App) => {
  app.component(Grid.name, Grid)
  app.component(GridItem.name, GridItem)

  return app
}

export default Grid
