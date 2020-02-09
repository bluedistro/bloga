<template>
<div class="row q-pa-md flex flex-center">
  <div class=" col-md-6 col-sm-12 col-12 col-lg-6 login-div">

    <q-card class="form-card">
        <q-card-section>
        <q-item>
            <q-item-section avatar>
            <q-avatar>
                <img src="../assets/clogo.jpeg">
            </q-avatar>
            </q-item-section>

            <q-item-section>
            <q-item-label>Membership Registration Portal Login</q-item-label>
            <q-item-label caption>
                Presbyterian Church of Ghana, Millenium City Congregation, Kasoa.
            </q-item-label>
            </q-item-section>
        </q-item>
        </q-card-section>
        <q-separator />
        <q-card-section>
            <q-form
            @submit="onSubmit"
            class="q-gutter-md"
            >
            <q-input
                standard
                dense
                v-model="username"
                label="username *"
                hint="enter your username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type username']"
            />

            <q-input
                standard
                dense
                type="password"
                v-model="password"
                hint="enter your password"
                label="enter password *"
                lazy-rules
                :rules="[ val => val !== null && val !== '' || 'Please type password' ]"
            />

            <div>
                <q-btn  label="login"
                        type="submit"
                        :loading="loginLoading"
                        @click="onSubmit"
                        color="primary">
                        <template v-slot:loading>
                            <q-spinner-hourglass class="on-left" />
                        </template>
                </q-btn>
            </div>
            </q-form>
        </q-card-section>
    </q-card>

  </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      username: null,
      password: null,
      loginLoading: false,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.loginLoading = true
      let user = { username: this.username, password: this.password }
      this.$store.dispatch('example/login', user)
        .then(resp => {
          let loginStatus = this.$store.getters['example/getLoginSuccess']
          if (loginStatus === true) {
            this.$router.push({ name: 'home' })
            this.loginLoading = false
          }
        })
        .catch(error => {
          this.loginLoading = false
          console.log('error ', error)
          this.$q.notify({
            color: 'red-4',
            position: 'top',
            textColor: 'white',
            icon: 'warning',
            message: 'Unable to login. Please check login credentials and try again'
          })
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-div
    margin-top 60px

.form-card
    border solid $grey-4 1px
    border-radius 4px
    background-color $grey-1
</style>
