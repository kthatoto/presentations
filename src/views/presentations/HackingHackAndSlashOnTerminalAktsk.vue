<template lang="pug">
slide(:steps=4)
  eg-transition(enter='slideInRight' leave='slideOutLeft')
    p(v-if="step >= 1")
      | {{ step }}
    p(v-if="step >= 2")
      | {{ step }}
    p(v-if="step >= 3")
      | {{ step }}
    p(v-if="step >= 4")
      | {{ step }}
slide
  p Perfect
</template>

<script>
import { Slideshow } from 'eagle.js'
export default {
  mixins: [Slideshow]
}
</script>
