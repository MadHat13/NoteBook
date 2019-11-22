<template>
  <div>
    <form id="text11" method="get">
      年纪
      <input type="number" id="number1" max="200" min="1" required="required" name="age" />
      <br />姓名
      <input type="text" id="text1" required="required" name="name" />
      <button type="submit" onclick="test()">提交</button>
    </form>
  </div>
</template>

<script>
import {} from '../assets/js/Login';

export default {
  methods: {
    test() {
      const age = document.getElementById('number1');
      const name = document.getElementById('text1');
      const jsondata = {
        age: age.value,
        name: name.value,
      };
      console.log(age.value);
      console.log(name.value);
      $.ajax({
        type: 'post',
        url: 'login',
        data: jsondata,
        success: function(data) {
          alert('前端请求后端成功，返回了数据,数据显示用户名为' + data.name);
        },
        error: function(e) {
          alert('发生未知错误');
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
