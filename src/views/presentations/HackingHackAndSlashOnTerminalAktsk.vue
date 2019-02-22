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
    slide#page2(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ ls -l table_of_content
      h3 drwxr-xr-x Hack\ and\ Slashとは
      h3 drwxr-xr-x 悩み・経緯
      h3 drwxr-xr-x どう悩みを解決するか
      h3 d--------- デモ
      h3 drwxr-xr-x 構成とそれによるメリット

    slide#page1-5(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      img(:src="require('@/assets/images/im-sorry.png')")

    slide#page3(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat Hack\ and\ Slashとは
      h4 敵を倒して強くなり強いアイテムを入手しさらに強い敵を倒す
      h4 みたいな感じで、敵を倒すことに重点をおいたゲームジャンル
    slide#page4(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat 悩み・経緯
      h4.li キャラ育成でどの職業を極めるか迷い続ける
      h4.li NPCが思い通り動いてくれない
      h4.li 自動化したくても限度がある
      h3 みたいなモヤモヤがある
    slide#page5(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2
        | $ echo これを全部解決する
        br
        | $ echo ゲームアーキテクチャを
        br
        | $ echo 思いつきました！
    slide#page6(:steps=3 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat どう悩みを解決するか
      h3 キャラ育成でどの職業を極めるか迷い続ける
      h4.li(v-if="step >= 2") キャラたくさん作れればいいじゃん
      h4.li(v-if="step >= 3") 複数同時に操作できればいいじゃん
    slide#page7(:steps=2 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat どう悩みを解決するか
      h3 NPCが思い通り動いてくれない
      h4.li(v-if="step >= 2") 複数同時に(ry

    slide#page8(:steps=2 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat どう悩みを解決するか
      h3 自動化したくても限度がある
      h4.li(v-if="step >= 2") ゲームの操作をプログラマブルにすればいいじゃん

    slide#page9(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ echo 要するに
      h2 $ echo プログラムから操作できるゲーム

    slide#page10(:steps=4 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ ./デモ
      h3(v-if="step >= 2") Permission denied
      h3(v-if="step >= 3") $ sudo chmod +x デモ
      h3(v-if="step >= 4") $ ./デモ

</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow]
}
</script>

<style lang="scss" scoped>
#presentation {
  font-family: "Courier New", 'Kosugi Maru', sans-serif;
  color: #20c20e;
  ::selection {
    color: white;
    background-color: #46639c;
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
  #page1-5 {
    text-align: center;
    img {
      margin-top: 3em;
      width: 45%;
    }
  }
  #page2 {
    h2 { font-size: 1.7em; }
    h3 { font-size: 1.2em; }
  }
  .eg-slideshow {
    padding: 1em;
    background-color: #222;
    h1, h2, h3, h4, h5, h6 {
      text-align: left;
    }
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.6em; }
    h4 {
      font-size: 1.2em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 2em;
        list-style-type: disc;
      }
    }
    h5 {
      font-size: 1em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 2em;
        list-style-type: disc;
      }
    }
    h6 {
      font-size: 0.8em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 4em;
        list-style-type: circle;
      }
    }
    p {
      font-size: 0.7em;
      &.li {
        display: list-item;
        margin: 0.8em 0 0.8em 7em;
        list-style-type: square;
      }
    }
  }
}
</style>
