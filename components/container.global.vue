<template>
  <div>
    <client-only>
      <v-col cols="12" class="pa-0">
        <v-container fluid class="pa-0">
          <slot />
        </v-container>
      </v-col>
    </client-only>
  </div>
</template>
