<template>
<div class="row q-pa-md flex flex-center">
  <div class=" col-md-6 col-sm-12 col-12 col-lg-6 login-div">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        standard
        v-model="username"
        label="username *"
        hint="enter your username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type username']"
      />

      <q-input
        standard
        type="password"
        v-model="password"
        hint="enter your password"
        label="enter password *"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Please type password' ]"
      />

      <div>
        <q-btn label="login" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      username: null,
      password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.username === 'username' && this.password === 'password') {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-div
    margin-top 60px
</style>
