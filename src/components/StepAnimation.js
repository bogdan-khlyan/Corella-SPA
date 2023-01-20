import { TransitionGroup } from 'vue'
import gsap from 'gsap'

const StepAnimation = (props, context) => {
  const childNodesWrapper = context.slots.default()
  const indexOfLastChild = childNodesWrapper[0].children.length - 1

  if (indexOfLastChild === -1) context.emit('all-complete')

  const beforeEnter = (el) => {
    if (+el.dataset.index === 0) {
      if (props.wrapper) {
        props.wrapper.style.overflow = 'hidden'
      }
    }

    el.style.opacity = 0
    el.style.transform = 'translateY(100%)'
  }

  const enter = (el, done) => {
    gsap.to(el, {
      opacity: 1,
      transform: 'translateY(0)',
      delay: el.dataset.index * 0.15,
      onComplete: () => {
        if (+el.dataset.index === indexOfLastChild) {
          if (props.wrapper) {
            props.wrapper.style.overflow = ''
          }
          context.emit('all-complete')
        }

        context.emit('item-complete', {
          el,
          index: el.dataset.index,
        })

        done()
      },
    })
  }

  return (
    <TransitionGroup
      css={false}
      appear={true}
      onEnter={enter}
      onBeforeEnter={beforeEnter}
    >
      {childNodesWrapper}
    </TransitionGroup>
  )
}

StepAnimation.props = ['wrapper']
StepAnimation.emits = ['item-complete', 'all-complete']

export default StepAnimation
