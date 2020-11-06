<template>
  <div>
      <section>
        <form>
            <div class="form-group m-5 font-family: 'Noto Sans KR', sans-serif;">
                <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">1</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">QR코드 정보를 위해<br>사진이 필요해요.</p>
                </div>
                <div>
                    <label for="#" class="err">{{error}}</label>
                    <qrcode-stream @decode="onDecode" class="camera" @init="onInit"></qrcode-stream>
                </div><br>
                <div class="d-flex">
                    <p>{{result}}</p>
                    <button class="btn btn-primary" @click.prevent="onSubmit">확인하기</button>
                    <router-link class="btn btn-danger ml-3" to="/" style="text-decoration: none;">취소하기</router-link>
                </div>
            </div>
            <!-- @click="onSubmit"-->
        </form>
        <!-- <ViewQR :initname="name" :initage="age" :initemail="email" class=""/> -->
    </section>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import axios from 'axios';
// import ViewQR from './ViewQR';

const instance = axios.create({
    baseURL: 'http://localhost:7000',
});

export default {
    components: {
        QrcodeStream,
        // ViewQR,
    },
    data() {
        return{
            result: '',
            error: '',
            name: '',
            age: '',
            email: ''
        }
    },
    methods: {
            onDecode (result){
                this.result = result
            },
            async onInit (promise) {
            try{
                await promise 
            }catch(error){
                if(error.name === "NotAllowedError"){
                    this.error = "카메라 사용에 대한 권한을 허용해 주세요."
                    console.log(this.error);
                } else if (error.name === 'NotFoundError'){
                    this.error = "이 컴퓨터에 카메라 모듈이 존재하지 않습니다."
                } else if (error.name === "NotSupportedError"){
                    this.error = "현재 사이트가 https를 사용하지 않아 카메라를 사용할 수 없습니다. 웹 관리자에게 문의해주세요."
                } else if (error.name === "NotReadableError"){
                    this.error = "다른 프로그램에서 이미 카메라를 사용중이에요. 카메라가 사용중인 프로그램을 닫아주세요."
                } else if (error.name === "OverconstrainedError"){
                    this.error = "설치된 카메라는 현재 이 웹사이트에서 사용이 불가능해요"
                } else if (error.name === "StreamApiNotSupportedError"){
                    this.error = "현재 사용중이신 브라우저가 카메라사용을 지원하지 않고 있어요! Chrome를 다운받아 주세요."
                }
            }
        },
        onSubmit(){
            const formData = new FormData();
            formData.append('qrdata',this.result);
            try{
                instance.post('/login',formData).then((res) => {
                    const result2 = JSON.stringify(res.data);
                    const result1 = res.data.result1;
                    const arr = {"result1":[]}
                    const arreal = JSON.stringify(arr);
                    if(result2 === arreal){
                        this.$router.push({ path:'/failQR'});
                    }else if(result1[0].name === 'null'){
                        this.$router.push({ name:'addInfoQR', params:{initresult: this.result} });
                    }else{
                        this.name = result1[0].name;
                        this.age = result1[0].age;
                        this.email = result1[0].email;
                        this.$router.push({ name: 'ViewQR', params: {initname: this.name, initage: this.age, initemail: this.email, initresult: this.result}});
                        //push로 파라미터 보낼때 path 말고 name만 작동함. path는 query사용시 사용.
                    }
                });
            }catch(err){
                console.log(err);
            }
        }
    },
}
</script>

<style>
    .err{
        font-weight: 600;
        color: red;
        font-size: 18px;
    }
    .camera{
        width: 300px;
        height: 300px;
    }
</style>