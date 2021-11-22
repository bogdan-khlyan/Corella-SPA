<template lang="pug">
  - let r = 500;
  - let w = 8*r, h = .5*w, x = -.5*w, y = -.5*h;
  - let c = Math.round(r/Math.SQRT2);
  - let l = Math.ceil((3*Math.PI + 4)*r);
  - let d = ~~(Math.PI*r);

  svg(viewBox=[x, y, w, h].join(' '))
    path#inf(d=`M${c}${-c}A${r} ${r} 0 1 1 ${c} ${c}L${-c}${-c}A${r} ${r} 0 1 0${-c} ${c}z`)
    use(xlink:href='#inf' stroke-dasharray=`${d} ${l - d}` stroke-dashoffset=`${l}px`)
</template>

<script>
export default {
  name: 'infinity',
  model: {
    prop: 'data',
    event: 'input'
  },
  data () {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
html { background: #333 }
body { text-align: center }

svg {
  max-width: 25em;
  border-radius: 3px;
  box-shadow: none;
  background: #FFFFFF;
  fill: none;
  stroke: #FFFFFF;
  stroke-linecap: round;
  stroke-width: 8%
}

use {
  stroke: rgba(13, 174, 121, 0.7);
  animation: a 2s linear infinite
}

@keyframes a { to { stroke-dashoffset: 0px } }
</style>
