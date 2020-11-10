<template>
  <div>
      <section>
        <form action="http://hong4383.r-e.kr/sign_up" method="POST">
            <div class="form-group m-5 font-family: 'Noto Sans KR', sans-serif;">
                <div class="d-flex align-items-center">
                    <p style="font-weight: 600; font-size: 80px; color: #167fe0;">1</p>
                    <p class="ml-3" style="font-weight: 600; font-size: 30px; color: #313131;">QR코드 등록을 위해<br>정보가 필요해요.</p>
                </div>
                <div>
                    <label for="#">이름을 입력해주세요.</label>
                    <input type="text" class="form-control" placeholder="이름를 입력하세요." name="name"  id="name">
                    <small style="color: darkgrey">제대로 입력하지 않으면 거부됩니다.</small>
                </div><br>
                <div>
                    <label for="#">나이를 입력해주세요.</label>
                    <input type="number" class="form-control" placeholder="나이를 입력하세요." name="age" id="age">
                    <small style="color: darkgrey">나이를 속이지 마세요!</small>
                </div><br>
                <div>
                    <label for="#">이메일 입력해주세요.</label>
                    <input type="text" placeholder="Email를 입력하세요." class="form-control" name="email" id="email">
                    <small style="color: darkgrey">이메일 형식에 따라 해주세요.</small>
                </div><br>
                <div>
                    <label for="#">비밀번호 입력해주세요.</label>
                    <input type="password" placeholder="비밀번호를 입력하세요." class="form-control" name="password" id="password">
                    <small style="color: darkgrey">비밀번호는 아무거나 사용하셔도 됩니다.</small>
                </div><br>
                <div class="d-flex">
                    <button type="submit" class="btn btn-primary" onClick="location.href='SuccesQr.html'">
                        등록하기
                    </button>
                    <router-link class="btn btn-danger ml-3" to="/" style="text-decoration: none;">취소하기</router-link>
                </div>
            </div>
            <!-- <input type="file" accept="image/*;capture=camera"> onClick="location.href='SuccesQr.html'"-->
        </form>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>