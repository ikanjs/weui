import { defineComponent } from 'vue'

interface GridItemProps {
  imgSrc: string
  label: string
}

const GridItem = defineComponent<GridItemProps>({
  name: 'VGridItem',
  setup(props, { emit }) {
    return (
      <div class="weui-grid" onClick={(e) => emit('click', e)}>
        <img class="weui-grid__icon" src={props.imgSrc} />
        <div class="weui-grid__label">{props.label}</div>
      </div>
    )
  },
})

export default GridItem
