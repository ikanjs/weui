import { defineComponent } from 'vue'

const Grid = defineComponent({
  name: 'VGrid',
  setup() {
    return () => (
      <div class="weui-grids">
        <slot />
      </div>
    )
  },
})

export default Grid
