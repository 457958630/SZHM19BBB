<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      德莱文，一个顺风成神逆风成鬼的英雄，玩好了非常的厉害，但是对于操作的要求非常非常的大，很多LOL的朋友不会玩这个英雄，下面我就为大家带来一份德莱文的攻略和一些很重要的技巧
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
