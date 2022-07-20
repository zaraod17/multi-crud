<template>
  <div class="container table-responsive px-0 shadow">
    <table class="table caption-top table-striped table-hover">
      <caption class="title">
        <h3>Lista produktów</h3>
      </caption>
      <thead>
        <tr class="table-primary">
          <th scope="col"></th>
          <th scope="col">Model</th>
          <th scope="col">Przekątna</th>
          <th scope="col">Rozdzielczość</th>
          <th scope="col">RAM</th>
          <th scope="col">Flash</th>
          <th scope="col">Temperatura pracy</th>
          <th scope="col">Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, key) in prods" :key="key">
          <th scope="row-sm">{{ key + 1 }}</th>
          <td>{{ prod.model }}</td>
          <td>{{ prod.screenSize }}″</td>
          <td>{{ prod.width }}x{{ prod.height }}</td>
          <td>{{ prod.ramMemory }} {{ prod.ramMemUnit }}</td>
          <td>{{ prod.flashMemory }} {{ prod.flashMemUnit }}</td>
          <td>od 0 do {{ prod.maxTemp }}°C</td>
          <td class="col">
            <ul class="list">
              <li>
                <edit-product :product="prod" @save-changes="saveData" />
              </li>
              <li>
                <button @click="removeItem(key)" class="btn btn-danger">
                  Usuń
                </button>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <!--
    <button class="btn" @click="showItem">Click me</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import products from "../../utils/dummy-data";
import EditProduct from "@/components/EditProduct.vue";

export default defineComponent({
  components: { EditProduct },
  setup() {
    const prods = ref();

    onBeforeMount(() => {
      if (localStorage.getItem("products")) {
        prods.value = JSON.parse(localStorage.getItem("products") || "{}");
      } else {
        localStorage.setItem("products", JSON.stringify(products));
        prods.value = JSON.parse(localStorage.getItem("products") || "{}");
      }
    });

    const saveData = (payload: any) => {
      let productId = prods.value.findIndex(
        (prod: any) => prod.id === payload.id
      );
      prods.value[productId] = payload;
      localStorage.setItem("products", JSON.stringify(prods.value));
    };

    const removeItem = (key: any) => {
      prods.value.splice(key, 1);
    };

    // function showItem() {
    //   prods.value[0].model = ":D";
    //   localStorage.setItem("products", JSON.stringify(prods.value));
    //   localStorage.removeItem("products");
    //   console.log(prods.value);
    // }

    return { prods, saveData, removeItem };
  },
});
</script>

<style scoped>
.container {
  margin-top: 10%;
}

.title {
  text-align: center;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
