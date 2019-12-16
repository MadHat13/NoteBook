<template>
  <div>
    <div class="box">
      <h1>REGIST</h1>
      <input type="text" id="nickname" name="nickname" placeholder="Username"> <br/>
      <input type="password" id="password" name="password"  placeholder="password" ><br/>
      <input type="password" id="password_check" name="password_check"  placeholder="password_check"><br/>
      <input type="submit" class="sub" name="submit" value="Login" @click="test()">
	  </div>

  </div>
</template>

<script>
import $ from 'jquery';
export default {
  components:{},
  data(){
    return {
        isClear: false,
        detail:""
        }
      } ,
  methods: {
    test() {
      const nickname = document.getElementById("nickname");
      const password = document.getElementById("password");
      const password_check = document.getElementById("password_check");
      if(nickname.value==""){
        alert("用户名不能为空");
        return;
      }else if(password.value==""){
        alert("密码不能为空");
        return;
      }else if(password_check.value==""){
        alert("请再次输入密码");
        return;
      }
      if (password.value != password_check.value) {
          alert("两次密码不一致");
          password_check.value = "";
          password.value = "";
          return;
      }
      const jsondata = {
        nickname: nickname.value,
        password: password.value,
      };
      var beforethis = this;
      $.ajax({
        type: "post",
        url: "http://localhost:8080/NoteBook/register",
        data: jsondata,
        success: function(data) {
            if(data.msg=="false"){
                alert("注册失败");
                return;
            }else{
                alert("注册成功");
                var date = new Date();
                document.cookie = "nickname = " + nickname.value +";expires="+date.toGMTString;
                beforethis.$router.push('login');
            }
        },
        error: function(e) {
          alert("发生未知错误");
        }
      });
    },
    
  },
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
#nickname , #password ,#password_check{
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
.user:hover,.pwd:hover{
	width: 280px;
	border-color: green;
}
.sub:hover{
	background-color: #27ae60;
	border-color: green;
}
</style>