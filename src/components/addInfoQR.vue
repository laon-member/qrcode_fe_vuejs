<template>
  <div>
      <section>
        <div class="m-5" style="font-weight: 800; color:#313131">
            <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">2</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">등록된 QR이지만<br>정보가 없어요.</p>
                </div>
            <div class="mt-5">
              <button class="btn btn-success" @click="onSubmit">계정정보 수정하기</button>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
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