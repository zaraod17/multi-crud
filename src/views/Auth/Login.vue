<template>
  <div @submit.prevent="submitForm" class="container bg-light rounded shadow">
    <form @submit.prevent="" class="col py-5 align-items-center">
      <div class="row mb-3"><h4 class="col text-center">Zaloguj się</h4></div>
      <div class="mb-1 mx-5 pb-2 row">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          v-model="creds.email"
        />
      </div>
      <div class="mb-3 mx-5 row">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Hasło"
          v-model="creds.password"
        />
      </div>

      <button type="submit" class="btn btn-outline-primary ms-5">
        Zaloguj
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { setCookie, getCookie } from "../../utils/cookies";

export default defineComponent({
  setup() {
    const router = useRouter();
    const isValid = ref(true);
    const creds = ref({
      email: "",
      password: "",
    });

    const submitForm = () => {
      if (
        !creds.value.email ||
        !creds.value.email.includes("@") ||
        !creds.value.password
      ) {
        isValid.value = false;
        return;
      }
      setCookie("email", creds.value.email, 1);
      setCookie("password", creds.value.password, 1);

      if (document.cookie) router.replace({ name: "ProductsList" });
    };

    return { creds, submitForm };
  },
});
</script>

<style scoped>
.container {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 12rem auto;
  max-width: 40rem;
}

.error {
  border-color: red;
  color: red;
  font-size: small;
}
</style>
