<template>
  <div>
      <section>
        <form action="http://localhost:6000/login" method="POST" enctype="form-data">
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
                    <input type="text" :value="result">
                    <p>{{result}}</p>
                    <button type="submit" class="btn btn-primary">확인하기</button>
                    <router-link class="btn btn-danger ml-3" to="/" style="text-decoration: none;">취소하기</router-link>
                </div>
            </div>
            <!-- <input type="file" accept="image/*;capture=camera"> onClick="location.href='SuccesQr.html'"-->
        </form>
    </section>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import axios from 'axios';
import {router} from '../router/index';
export default {
    components: {QrcodeStream},
    data () {
        return{
            result: '',
            error: '',
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
        onCheck(result) {
            try{
                axios.post('/sign_up').then(function(res, err){
                    if(err){
                        console.log(err);
                    }else{
                        if(result[0].name === null){
                            router.push("수정페이지 이동");
                        }else{
                            router.push("/ViewQR");
                        }
                    }
                })
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