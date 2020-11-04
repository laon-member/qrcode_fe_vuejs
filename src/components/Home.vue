<template>
  <section>
        <div class="m-5" style="font-weight: 800; color:#313131">
            <p style="font-family: 'Noto Sans KR', sans-serif; font-weight: 600; font-size: 30px;">QR CODE 오신 것을 <br>환영합니다!</p>
            <router-link class="btn btn-success" to="/scanQR">
                <i class="fas fa-qrcode"></i>
                지금 QR 스캔하기
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style>

</style>