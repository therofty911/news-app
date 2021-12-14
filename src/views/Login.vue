<template>
  <div class="main-container">
    <form>
      <div class="box-container">
        <SocialLogin />
      </div>
    </form>
  </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
export default {
  name: 'login',
  components: {
    SocialLogin
  }
}
</script>
