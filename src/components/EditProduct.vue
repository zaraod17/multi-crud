<template>
  <div>
    <button
      type="button"
      class="btn btn-primary row-6"
      data-bs-toggle="modal"
      :data-bs-target="`#${updatedProduct.id}`"
      @click="toggleModal"
    >
      Edytuj
    </button>

    <div
      class="modal fade"
      :id="updatedProduct.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edytuj parametry</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row">
              <div
                class="col-12 mb-3"
                :class="{ invalid: !isValid.modelValid.isValid }"
              >
                <label for="model" class="col-form-label">Model:</label>
                <input
                  type="text"
                  class="form-control"
                  id="model"
                  maxlength="30"
                  v-model="updatedProduct.model"
                  @input="validateForm"
                />
                <p v-if="!isValid.modelValid.isValid">
                  Pole nie może być puste
                </p>
              </div>
              <div
                class="col-12 mb-3"
                :class="{ invalid: !isValid.screenSizeValid.isValid }"
              >
                <label for="diagonal" class="col-form-label">Przekątna:</label>
                <input
                  type="number"
                  min="0"
                  id="diagonal"
                  class="form-control"
                  v-model="updatedProduct.screenSize"
                  @input="validateForm"
                />
                <p v-if="!isValid.screenSizeValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
              <div
                class="col-sm-6"
                :class="{ invalid: !isValid.widthValid.isValid }"
              >
                <label for="width" class="col-form-label">Szerokość</label>
                <input
                  v-model="updatedProduct.width"
                  type="number"
                  min="0"
                  id="width"
                  class="form-control"
                  @input="validateForm"
                />
                <p v-if="!isValid.widthValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
              <div
                class="col-sm-6"
                :class="{ invalid: !isValid.heightValid.isValid }"
              >
                <label for="height" class="col-form-label">Wysokość</label>
                <input
                  v-model="updatedProduct.height"
                  type="number"
                  min="0"
                  id="height"
                  class="form-control"
                  @input="validateForm"
                />
                <p v-if="!isValid.heightValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
              <div
                class="col-7"
                :class="{ invalid: !isValid.ramMemoryValid.isValid }"
              >
                <label for="ram" class="col-form-label">Pojemność RAM</label>
                <input
                  v-model="updatedProduct.ramMemory"
                  type="number"
                  min="0"
                  id="ram"
                  class="form-control"
                  @input="validateForm"
                />
                <p v-if="!isValid.ramMemoryValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
              <div class="col-5">
                <label for="ram" class="col-form-label">Jednostka</label>
                <select
                  v-model="updatedProduct.ramMemUnit"
                  class="form-select"
                  name="ram"
                  id="ram"
                >
                  <option value="MB">MB</option>
                  <option value="GB">GB</option>
                </select>
              </div>
              <div
                class="col-7"
                :class="{ invalid: !isValid.flashMemoryValid.isValid }"
              >
                <label for="flash" class="col-form-label"
                  >Pojemność Flash</label
                >
                <input
                  v-model="updatedProduct.flashMemory"
                  type="number"
                  min="0"
                  id="flash"
                  class="form-control"
                  @input="validateForm"
                />
                <p v-if="!isValid.flashMemoryValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
              <div class="col-5">
                <label for="ram" class="col-form-label">Jednostka</label>
                <select
                  v-model="updatedProduct.flashMemUnit"
                  class="form-select"
                  name="ram"
                  id="ram"
                >
                  <option value="MB">MB</option>
                  <option value="GB">GB</option>
                </select>
              </div>
              <div
                class="col-sm-8"
                :class="{ invalid: !isValid.maxTempValid.isValid }"
              >
                <label for="temp" class="col-form-label">Max temperatura</label>
                <input
                  v-model="updatedProduct.maxTemp"
                  type="number"
                  min="0"
                  id="temp"
                  class="form-control"
                  @input="validateForm"
                />
                <p v-if="!isValid.maxTempValid.isValid">
                  Wartość musi być większa od zera
                </p>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Zamknij
            </button>
            <button class="btn" @click="showData">Show</button>

            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="saveChanges"
              :disabled="!formIsValid ? true : false"
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const isValid = reactive({
      modelValid: { isValid: true },
      screenSizeValid: { isValid: true },
      widthValid: { isValid: true },
      heightValid: { isValid: true },
      flashMemoryValid: { isValid: true },
      ramMemoryValid: { isValid: true },
      flashMemUnitValid: { isValid: true },
      ramMemUnitValid: { isValid: true },
      maxTempValid: { isValid: true },
    });

    const formIsValid = ref(true);

    const updatedProduct = reactive({
      id: props.product.id,
      model: props.product.model,
      screenSize: props.product.screenSize,
      width: props.product.width,
      height: props.product.height,
      flashMemory: props.product.flashMemory,
      ramMemory: props.product.ramMemory,
      ramMemUnit: props.product.ramMemUnit,
      flashMemUnit: props.product.flashMemUnit,
      maxTemp: props.product.maxTemp,
    });

    const validateForm = () => {
      if (updatedProduct.model == "") {
        isValid.modelValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.modelValid.isValid = true;
      }
      if (updatedProduct.screenSize <= 0) {
        isValid.screenSizeValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.screenSizeValid.isValid = true;
      }
      if (updatedProduct.width <= 0) {
        isValid.widthValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.widthValid.isValid = true;
      }
      if (updatedProduct.height <= 0) {
        isValid.heightValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.heightValid.isValid = true;
      }
      if (updatedProduct.flashMemory <= 0) {
        isValid.flashMemoryValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.flashMemoryValid.isValid = true;
      }
      if (updatedProduct.ramMemory <= 0) {
        isValid.ramMemoryValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.ramMemoryValid.isValid = true;
      }
      if (updatedProduct.maxTemp <= 0) {
        isValid.maxTempValid.isValid = false;
        formIsValid.value = false;
      } else {
        isValid.maxTempValid.isValid = true;
      }

      if (
        isValid.modelValid.isValid &&
        isValid.screenSizeValid.isValid &&
        isValid.widthValid.isValid &&
        isValid.heightValid.isValid &&
        isValid.flashMemoryValid.isValid &&
        isValid.ramMemoryValid.isValid &&
        isValid.maxTempValid.isValid &&
        isValid.maxTempValid.isValid
      ) {
        formIsValid.value = true;
      }
    };

    const saveChanges = () => {
      // validateForm();
      if (!formIsValid.value) {
        return;
      }
      emit("save-changes", updatedProduct);
    };

    const showData = () => {
      console.log(props.product);
    };

    return {
      updatedProduct,
      showData,
      validateForm,
      isValid,
      saveChanges,
      formIsValid,
    };
  },
});
</script>

<style scoped>
.invalid label,
.invalid p {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
