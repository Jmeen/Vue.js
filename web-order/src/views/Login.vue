<template>
<v-container fill-height style="max-width:350px;">

    <v-layout align-center row wrap>

        <v-flex xs12>
                <v-alert
                :value="isLoginError"
                 type="error">
                아이디와 비밀번호를 확인해주세요
                </v-alert>
                <v-alert
                :value="isLogin"
                 type="success">
                로그인이 완료되었습니다.
                </v-alert>
           <v-card   elevation="2">
                <v-toolbar  elevation="4" flat height="30">
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                <div class="pa-3">
                    <v-text-field
                        type="text"
                        v-model="email"
                        label="이메일을 입력하세요"
                    >
                    </v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password"
                        label="패스워드를 입력하세요"
                    >
                    </v-text-field>
                    <v-btn large block depressed 
                    @click="login({email:email,password:password})">Login</v-btn>
                </div>

            </v-card>
        </v-flex>
     
  </v-layout>
 
</v-container>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return{
            email:null,
            password:null,
        }
    },
    methods:{
        ...mapActions(['login']),
        // login(){
            // 전체 유저에서 해당 이메일로 유저 찾기
            // let selectedUser = null;
            // this.allusers.forEach(user=>{
            //     if(user.email===this.email) selectedUser = user
            // })
            // selectedUser === null
            //     ?(this.iserror=true, this.issuccess=false)
            //     :selectedUser.password!==this.password
            //         ?(this.iserror=true, this.issuccess=false)
            //         :(this.issuccess=true, this.iserror=false)

            // if(selectedUser === null) alert("이메일이 없습니다")
            // else{
            //     selectedUser.password!==this.password
            //     ?alert("이메일과 비밀번호가 일치하지 않습니다")
            //     :alert("로그인이 완료되었습니다.")
                // if(selectedUser.password!==this.password) 
                //     alert("이메일과 비밀번호가 일치하지 않습니다")
                // else{
                //     alert("로그인이 완료되었습니다.")
                //     }
            // }
            // 그 유저의 비밀번호 비교

        // }
    },
    computed:{
        ...mapState(["isLogin","isLoginError"])
    }
}
</script>

<style>

</style>