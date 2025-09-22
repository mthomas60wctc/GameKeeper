<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-red text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <router-link to="/" class="text-white" style="text-decoration: none">
            GameKeeper
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered class="dark">
      <q-list>
        <q-item-label header overline>MENU</q-item-label>
        <q-item
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          clickable
          v-ripple
          active-class="bg-red text-white"
        >
          <q-item-section>
            <q-item-label overline>{{ item.label }}</q-item-label>
            <q-item-label caption>{{ item.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="absolute-bottom-left q-pa-sm">
        <q-btn
          flat
          dense
          round
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          aria-label="Toggle Dark Mode"
          @click="toggleDarkMode"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <q-card flat bordered class="center-col q-ma-lg">
        <router-view />
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'
import { useMeta } from 'quasar'
import '../css/mainLayout.scss'

const $q = useQuasar()

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const menuItems = [
  { to: '/newInstance', label: 'START', description: 'Begin a new game session' },
  { to: '/newGame', label: 'ADD', description: 'Add a new game to your library' },
  { to: '/ongoingGame', label: 'RESUME', description: 'Continue an ongoing game' },
  { to: '/recordsView', label: 'RECORDS', description: 'View your game and player records' },
]

function toggleDarkMode() {
  $q.dark.toggle()
}

const route = useRoute()

useMeta(() => ({
  title: route.meta.title || 'GameKeeper',
}))
</script>
