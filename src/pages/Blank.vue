<template>
    <q-page class="general-bg-theme">
      <div class="">
        <q-intersection transition="jump-down" once>
          <div class="row q-pa-md q-gutter-sm">
            <q-card flat class="my-card col-md-2 col-sm-12 col-12 col-lg-3 col-xl-3">
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                basic
              >
                <div class="absolute-bottom text-h6 author-info">
                  Something Abyss
                </div>
              </q-img>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="author-info">Lucy Quist</q-item-label>
                  <q-item-label caption>Author</q-item-label>
                </q-item-section>

                <q-item-section class="more">
                  <q-item-label>
                    <q-btn flat round dense icon="more_vert" class="q-mr-xs"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section class="module fade">
                <p>
                  {{ lorem }} into the somethinf of the dvddcscjdcjdcjb
                </p>
              </q-card-section>
            </q-card>

            <q-card flat class="my-card col-md-2 col-sm-12 col-12 col-lg-3 col-xl-3">
              <q-img
                src="https://cdn.quasar.dev/img/parallax1.jpg"
                basic
              >
                <div class="absolute-bottom text-h6 author-info">
                  Apollo World Mission 5
                </div>
              </q-img>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="author-info">Lara Croft</q-item-label>
                  <q-item-label caption>Author</q-item-label>
                </q-item-section>

                <q-item-section class="more">
                  <q-item-label>
                    <q-btn flat round dense icon="more_vert" class="q-mr-xs"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section class="module fade">
                <p>
                  {{ lorem }}
                </p>
              </q-card-section>
            </q-card>

            <q-card flat class="my-card col-md-2 col-sm-12 col-12 col-lg-3 col-xl-3">
              <q-img
                src="https://cdn.quasar.dev/img/mountains.jpg"
                basic
              >
                <div class="absolute-bottom text-h6 author-info">
                  Jekyll and Hyde
                </div>
              </q-img>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar3.jpg">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="author-info">Jenny Tram</q-item-label>
                  <q-item-label caption>Author</q-item-label>
                </q-item-section>

                <q-item-section class="more">
                  <q-item-label>
                    <q-btn flat round dense icon="more_vert" class="q-mr-xs"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section class="module fade">
                <p>
                  {{ lorem }}
                </p>
              </q-card-section>
            </q-card>

            <q-card flat class="my-card col-md-2 col-sm-12 col-12 col-lg-3 col-xl-3">
              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                basic
              >
                <div class="absolute-bottom text-h6 author-info">
                  Last Time Forever
                </div>
              </q-img>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="author-info">King Dee</q-item-label>
                  <q-item-label caption>Author</q-item-label>
                </q-item-section>

                <q-item-section class="more">
                  <q-item-label>
                    <q-btn flat round dense icon="more_vert" class="q-mr-xs"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section class="module fade">
                <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                Mauris placerat eleifend leo.
                </p>
              </q-card-section>
              </q-card>
          </div>
        </q-intersection>
      </div>
    </q-page>
</template>

<script>
export default {
  name: 'blank',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  },
  methods: {},
  mounted () {
    console.log('banana here today')
  }
}
</script>

<style lang="stylus" scoped>
.general-bg-theme
  background-color $grey-1

.my-card
  display inline-block
  border solid $grey-4 1px
  border-radius 8px

.scrolling-wrapper
  overflow-x scroll
  overflow-y hidden
  white-space nowrap

.more
  text-align right

.author-info
  overflow hidden
  white-space nowrap
  text-overflow ellipsis

body
  padding 20px
  font 1.2em/1.2em 'Open Sans', sans-serif

.module
  width 100%
  margin 0 0 1em 0
  overflow: hidden

.module p
  margin: 0

.fade
  position relative
  height 7.0em

.fade:after
  content ""
  text-align right
  position absolute
  bottom 0
  right 0
  width 60%
  height 1.2em
  background linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)

</style>
