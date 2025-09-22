<template>
  <div class="q-pa-md">
    <div class="text-h6">Create a New Game</div>
  </div>
  <q-separator />
  <div class="row justify-between">
    <q-btn
      label="Cancel"
      icon="cancel"
      color="amber-14"
      flat
      @click="$router.push('/')"
    />
    <q-btn
      label="Add Game To Library"
      icon="arrow_forward"
      color="red"
      flat
      @click="$router.push('/newInstance')"
    />
  </div>
</template>

<script setup></script>
