import { defineComponent } from 'vue'
import classNames from 'classnames'

interface BadgeProps {
  overflowCount: number
  count: number
  dot: boolean
}

const Badge = defineComponent<BadgeProps>({
  name: 'VBadge',
  setup(props) {
    const count =
      props.count > props.overflowCount
        ? `${props.overflowCount}+`
        : props.count

    return (
      props.count > 0 && (
        <div class={classNames('weui-badge', { 'weui-badge_dot': props.dot })}>
          {count}
        </div>
      )
    )
  },
})

export default Badge
