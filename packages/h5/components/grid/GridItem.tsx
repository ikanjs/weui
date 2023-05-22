import { defineComponent } from 'vue'
// import { warning } from '@ikanjs/weui-core'

export interface GridItemProps {
  imgSrc: string
  label: string
}

const GridItem = defineComponent<GridItemProps>({
  name: 'VGridItem',
  slots: ['label'],
  setup(props, { emit, slots }) {
    return (
      <div class="weui-grid" onClick={(e) => emit('click', e)}>
        <img class="weui-grid__icon" src={props.imgSrc} />
        <div class="weui-grid__label">{props.label ?? slots.label?.()}</div>
      </div>
    )
  },
})

export default GridItem
