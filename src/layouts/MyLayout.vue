<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-grey-7">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          Project X
        </q-toolbar-title>
        <q-input color="grey-2" standard dense label="search for a member...">
          <template v-slot:append>
            <q-btn flat round dense class="q-mr-xs" icon="search"></q-btn>
          </template>
        </q-input>
        <q-tabs shrink>
          <q-tab no-caps @click="goHome">Home</q-tab>
          <q-tab no-caps @click="registerMember">Add New Member</q-tab>
        </q-tabs>
        <!-- <q-btn flat round dense icon="apps" class="q-mr-xs"></q-btn> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Congregation Registration Portal</q-item-label>
        <q-input color="grey-2" standard dense label="search for a member...">
          <template v-slot:append>
            <q-btn flat round dense class="q-mr-xs" icon="search"></q-btn>
          </template>
        </q-input>
        <q-item clickable @click="goHome">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>view information and edit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="registerMember">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Add New Member</q-item-label>
            <q-item-label caption>register congregation</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    registerMember () {
      this.$router.push({ name: 'registerMember' })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
