<template>
  <div>
      <section>
            <div class="form-group m-5 font-family: 'Noto Sans KR', sans-serif;">
                <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">1</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">새로운 QR코드를<br>제작할게요.</p>
                </div>
                <div>
                    <button @click="MakeQR" class="btn btn-primary">QR제작하기</button><br>
                    <img :src="img" alt="">
                    <small style="color: darkgrey">다른이름으로 사진 저장을 해주세요!</small>
                </div>
            </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7000',
});

export default {
    data(){
        return{
            date: this.$moment().format('YYYYMMDD'),
            qrdata: '',
            img: '',
        }
    },

    methods: {
        MakeQR() {
            try{
                this.qrdata = this.date + '/a'
                const fromdata = new FormData();
                fromdata.append('qrdata', this.qrdata);
                instance.post('/InQr', fromdata).then((res)=> {
                    this.img = res;
                    console.log(this.img);
                });
            }catch(err){
                console.log(err);
            }
        }
    }

}
</script>

<style>

</style>