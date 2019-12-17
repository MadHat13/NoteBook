<template>
  <div>
    <div class="box">
      <h1>LOGIN</h1>
      <input type="text" id="nickname" name="nickname" placeholder="Username"> <br/>
      <input type="password" id="password" name="password"  placeholder="password" ><br/>
      <input type="submit" class="sub" name="submit" value="Login" @click="test()">
	  </div>
  </div>
</template>

<script>
import $ from "jquery";
import router from '../router';
export default {
  methods: {
    test() {
      const nickname = document.getElementById("nickname");
      const password = document.getElementById("password");
      if(nickname.value==""){
        alert("用户名不能为空");
        return;
      }else if(password.value==""){
        alert("密码不能为空");
        return;
      }
      const jsondata = {
        nickname: nickname.value,
        password: password.value
      };
      var beforethis = this;
      $.ajax({
        type: "post",
        url: "http://localhost:8080/NoteBook/login",
        data: jsondata,
        crossDomain:true, //设置跨域为true
        xhrFields: {
          withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
        },
        success: function(data) {
          if(data.msg=="false"){
            alert("登录失败");
            return;
          }else{
            var date = new Date();
            document.cookie = "nickname = " + nickname.value +";expires="+date.toGMTString;
            beforethis.$router.push('index');
          }
        },
        error: function(e) {
          alert("发生未知错误");
        }
      });
    },
  },
  mounted() {
    if (document.cookie.length > 0) {
      let cookie1 = document.cookie;
      let pos = cookie1.indexOf("=");
      let nickname = cookie1.slice(pos + 1);
      const name = document.getElementById("nickname");
      name.value = nickname;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
	margin: 0;
	padding: 0;
	font-family:sans-serif;
	background-color: #34495e;
	background-position: center;
}
.box{
	width: 300px;
	padding: 90px;/*内边距*/
	margin: 100px auto;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50px;
}
.box h1{
	color: white;
	text-align: center;
	font-weight: 500;
	padding: 10px;
	margin: auto;
}
#nickname , #password {
	background: none;
	display: block;
	text-align: center;
	margin: 20px auto;
	border: 2px  solid #3496db;
	padding: 14px 10px;
	width: 200px;
	outline:none;
	color: #fff;
	border-radius: 24px;
	transition: 0.2s;
}
.sub{
	background: none;
	display: block;
	text-align: center;
	margin: 20px auto;
	border: 2px  solid #3496db;
	padding: 14px 40px;
	outline:none;
	color: #fff;
	border-radius: 24px;
	transition: 0.25s;
	cursor: pointer;
}
#nickname:hover,#password:hover{
	width: 280px;
	border-color: green;
}
.sub:hover{
	background-color: #27ae60;
	border-color: green;
}
</style>
