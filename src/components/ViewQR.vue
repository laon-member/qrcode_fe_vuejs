<template>
  <div>
      <section>
        <div class="m-5" style="font-weight: 800; color:#313131">
            <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">2</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">등록된 QR입니다.<br>정보가 포함되어 있습니다.</p>
                </div>
            <div class="mt-5">
              <div class="d-flex">
                <h4>QR코드 </h4>
                <h4 class="font-weight-bold" style="white-space:pre;"> 계정정보</h4>
              </div>
              <hr>
              <div class="mt-2">
                <div class="w-2">
                <small class="font-weight-bold">QRCODE에 등록된 이름</small>
                <div class="h-2" style="font-size:30px; font-weight: 400;">{{name}}</div>
              </div>
              <div>
                <small class="font-weight-bold">QRCODE에 등록된 나이</small>
                <div class="h-2" style="font-size:30px; font-weight: 400;">{{age}}</div>
              </div>
              <div>
                <small class="font-weight-bold">QRCODE에 등록된 이메일</small>
                <div class="h-2" style="font-size:30px; font-weight: 400;">{{email}}</div>
              </div>
              </div>
              <br>
              <button class="btn btn-success" @click="onSubmit">계정정보 수정하기</button>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      name: this.$route.params.initname,
      age: this.$route.params.initage,
      email: this.$route.params.initemail,
      result: this.$route.params.initresult
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'UpdateQR', params:{initresult: this.result}});
    }
  }
}
</script>

<style>

</style>