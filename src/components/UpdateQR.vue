<template>
   <section>
        <div class="m-5" style="font-weight: 800; color:#313131">
            <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">3</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">QR정보를 수정합니다.<br>반드시 올바르게 기입해주세요.</p>
                </div>
            <div class="mt-5">
              <div class="d-flex">
                <h4>QR코드 </h4>
                <h4 class="font-weight-bold" style="white-space:pre;"> 계정개인정보 수정</h4>
              </div>
              <hr>
              <div class="mt-2">
                  <section>
                    <form>
                            <div>
                                <label for="#" style="font-weight:600;">이름을 입력해주세요.</label>
                                <input type="text" class="form-control" placeholder="이름를 입력하세요." v-model="name">
                                <small style="color: darkgrey">제대로 입력하지 않으면 거부됩니다.</small>
                            </div><br>
                            <div>
                                <label for="#" style="font-weight:600;">나이를 입력해주세요.</label>
                                <input type="number" class="form-control" placeholder="나이를 입력하세요." v-model="age">
                                <small style="color: darkgrey">나이를 속이지 마세요!</small>
                            </div><br>
                            <div>
                                <label for="#" style="font-weight:600;">이메일 입력해주세요.</label>
                                <input type="text" placeholder="Email를 입력하세요." class="form-control" v-model="email">
                                <small style="color: darkgrey">이메일 형식에 따라 해주세요.</small>
                            </div><br>
                            <div class="d-flex">
                                <button class="btn btn-primary" @click.prevent="onSubmit">변경하기</button>
                                <router-link class="btn btn-danger ml-3" to="/" style="text-decoration: none;">취소하기</router-link>
                            </div>
                    </form>
                  </section>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7000',
})
export default {
    props: {
        initqrdata: {
            type: String
        }
    },
    data() {
        return{
            qrdata: this.$route.params.initresult,
            name: '',
            age: '',
            email: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = new FormData();
            formData.append('qrdata', this.qrdata);
            formData.append('name', this.name);
            formData.append('age', this.age);
            formData.append('email', this.email);

            try{
                instance.post('/sign_up', formData).then(()=> {
                    alert('변경이 완료되었어요!');
                })
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style>

</style>