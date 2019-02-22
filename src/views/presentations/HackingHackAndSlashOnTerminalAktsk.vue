<template lang="pug">
#presentation
  .eg-slideshow(:mouseNavigation=false)
    slide#page1(enterPrev='slideInDown' leaveNext='slideOutUp')
      h1
        | Hacking
        br
        | Hack and Slash
        br
        | on Terminal
      h2
        | event: Akatsuki Geek Live
        br
        | &nbsp;date: Fri Feb 22 JST 2019
        br
        | &nbsp;&nbsp;&nbsp;by: @kthatoto
    slide(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      | ok1
    slide(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      | ok2
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow]
}
</script>

<style lang="scss" scoped>
#presentation {
  font-family: "Courier New", Consolas, monospace;
  color: #20c20e;
  ::selection {
    color: white;
    background-color: #46639c;
  }
  .eg-slideshow {
    padding: 1em;
    background-color: #222;
  }
  #page1 {
    h1 {
      text-align: left;
      font-size: 3em;
    }
    h2 {
      text-align: left;
      font-size: 1em;
    }
  }
}
</style>
