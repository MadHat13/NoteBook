<template>
  <div>
    用户名:
    <input type="text" id="nickname" max="200" min="1" required="required" name="nickname" />
    <br />密码
    <input type="text" id="password" required="required" name="password" />
    <br />确认密码
    <input
      type="text"
      id="password_check"
      required="required"
      name="password_check"
      @blur="check()"
    />
    <button type="submit" @click="test()">提交</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  methods: {
    test() {
      const nickname = document.getElementById("nickname");
      const password = document.getElementById("password");
      const jsondata = {
        nickname: nickname.value,
        password: password.value
      };
      $.ajax({
        type: "post",
        url: "http://localhost:8080/NoteBook/login",
        data: jsondata,
        success: function(data, cookie) {
          alert(
            "前端请求后端成功，返回了数据,数据显示用户名为" + data.nickname
          );
          console.log(cookie);
        },
        error: function(e) {
          alert("发生未知错误");
        }
      });
    },
    check() {
      const password = document.getElementById("password");
      const password_check = document.getElementById("password_check");
      if (password.value != password_check.value) {
          if($('#r1').html()!="两次密码不同"){
              $('#password_check').after("<span id='r1'>两次密码不同</span>");
          }
      } else {
        $('#r1').remove();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>