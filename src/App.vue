<template>
  <the-header :isUser="isLogged" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent} from "vue";
import TheHeader from "./components/TheHeader.vue";

export default defineComponent({
  components: { TheHeader },
  setup() {

    return { };
  },
});
</script>
