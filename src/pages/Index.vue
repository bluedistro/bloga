<template>
  <q-page class="flex flex-center general-bg-theme">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {}
  },
  methods: {},
  mounted () {
    console.log('index file inside')
  }
}
</script>

<style lang="stylus" scoped>
.general-bg-theme
  background-color $grey-1
</style>
