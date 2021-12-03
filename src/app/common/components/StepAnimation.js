import {TransitionGroup} from 'vue'
import gsap from 'gsap'

const StepAnimation = (props, context) => {
    const childNodesWrapper = context.slots.default()
    const indexOfLastChild = childNodesWrapper[0].children.length - 1

    const beforeEnter = (el) => {
        if (+el.dataset.index === 0) {
            props.wrapper.style.overflow = 'hidden'
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
                    props.wrapper.style.overflow = ''
                }
                done()
            }
        })
    }

    return (
        <TransitionGroup css={false}
                         appear={true}
                         onEnter={enter}
                         onBeforeEnter={beforeEnter}>
            {childNodesWrapper}
        </TransitionGroup>
    )
}

StepAnimation.props = ['wrapper']

export default StepAnimation
