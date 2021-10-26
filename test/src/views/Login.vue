<template>
 <form class="loginForm" v-on:submit.prevent="login" v-on:keyup="disableBtn">
      <h2>Login</h2>
      <div class="idForm" >
        <input type="text" v-model="id" class="id" placeholder="ID" >
      </div>
      <div class="passForm">
        <input type="password" v-model="pw" class="pw" placeholder="PW" >
      </div>
      <button type="submit" class="btn"  :disabled="validated ? '' : false" >
        LOG IN
      </button>
      <div class="bottomText" >
        Don't you have ID? <a href="#">sign up</a>
      </div>
    </form>
</template>

<script>
export default { 
    name:'login',
    data() { 
        return { 
            id:'',
            pw:'',
            validated:true
        }; 
    },
    methods:{
        disableBtn(){
           if(this.id !== "" & this.pw.length>2){
               this.validated = false;
           }
        },
        login(){
          if (this.id == "test" && this.pw == "1234") {
             alert("로그인성공");
             console.log("로그인에 성공하셨습니다.");
        } else {
            alert("로그인 실패");
            console.log("로그인에 실패하였습니다.");
        }
        }
        }
    }
</script>



<style>

*{
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-family:sans-serif;
}

body {
  background-image: #34495e;
}

.loginForm {
  position:absolute;
  width:300px;
  height:400px;
  padding: 30px, 20px;
  background-color:#FFFFFF;
  text-align:center;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
}

.loginForm h2{
  text-align: center;
  margin: 30px;
}

.idForm{
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
}

.passForm{
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
}

.id {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.pw {
  width: 100%;
  border:none;
  outline:none;
  color: #636e72;
  font-size:16px;
  height:25px;
  background: none;
}

.btn {
  position:relative;
  left:40%;
  transform: translateX(-50%);
  margin-bottom: 40px;
  width:80%;
  height:40px;
  background: linear-gradient(125deg,#81ecec,#6c5ce7,#81ecec);
  background-position: left;
  background-size: 200%;
  color:white;
  font-weight: bold;
  border:none;
  cursor:pointer;
  transition: 0.4s;
  display:inline;
  opacity: 0.5;
}

.btn:hover {
  background-position: right;
}

.bottomText {
  text-align: center;
}
</style>