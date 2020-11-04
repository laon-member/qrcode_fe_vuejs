<template>
  <div>
    <nav class="nav navbar-light bg-light">
        <ul class="d-flex" style="padding: 0;">
                <router-link to="/" class="nav-link">
                    <h3>QR CODE</h3>
                </router-link>
                <ul class="nav nav-pills ml-3" style="display: flex; align-items: center;">
                    <li class="nav-item">
                        <router-link to="/ScanQR" class="nav-link active" style="font-size: 11px;">
                            QR코드 스캔
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/AddQR" class="nav-link" style="color: #757575; font-size: 11px;">
                            QR코드 정보 수정
                        </router-link>
                    </li>
                </ul>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
