import gsap from 'gsap'

export default {
    name: 'ColumnsAnimate',
    template: '\
    <transition-group\
      :css="false"\
      appear\
      @before-enter="beforeEnter"\
      @enter="enter"\
    >\
      <slot></slot>\
    </transition-group>\
  ',
    props: {
        lastColumnIndex: {
            type: Number
        }
    },
    methods: {
        beforeEnter(el) {
            if (+el.dataset.index === 0) {
                document.getElementsByClassName('main-wrapper')[0].style.overflow = 'hidden'
            }

            el.style.opacity = 0
            el.style.transform = 'translateY(100%)'
        },

        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                transform: 'translateY(0)',
                delay: el.dataset.index * 0.15,
                onComplete: () => {
                    if (+el.dataset.index === this.lastColumnIndex) {
                        document.getElementsByClassName('main-wrapper')[0].style.overflow = 'visible'
                    }
                    done()
                }
            })
        },
    }
}
