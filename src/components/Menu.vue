<template>
    <!-- <div class="tab">
        <a href="#" v-if="this.$store.state.loginUser" @click.prevent="logout" class="tablinks">Logout</a>
        <router-link to="/login" class="tablinks">Sign In</router-link>
        <router-link to="/signup" class="tablinks">Sign Up</router-link>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/developer" class="nav-link">Developer</router-link>
            </li>
          </ul>

          <div class="navbar-nav ml-auto" v-if="currentUser">
            <a href="#" @click.prevent="logout" class="tablinks" style="color: #4BB686; text-decoration:none;font-size:20px;background-color: #314559; padding:10px;border-radius:6px;">Logout</a>
          </div>
          <div class="navbar-nav ml-auto" v-if="!currentUser">
            <a href="#" ></a>
          </div>

        </div>
    </div>
  </nav>
</template>

<script>
import router from '@/router/router'
import { removeItem } from '@/config/utils'

export default {
  name: 'signup_header',
  methods: {
    logout () {
      removeItem('user')
      router.push('/')
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.loginUser
    }
  }
}
</script>
