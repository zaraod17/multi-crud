<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@mdo"
  >
    Edytuj
  </button>

  <div
    class="modal fade"
    id="exampleModal"
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
            <div class="col-12 mb-3">
              <label for="model" class="col-form-label">Model:</label>
              <input
                type="text"
                class="form-control"
                id="model"
                maxlength="30"
              />
            </div>
            <div class="col-12 mb-3">
              <label for="diagonal" class="col-form-label">Przekątna:</label>
              <input type="number" min="0" id="diagonal" class="form-control" />
            </div>
            <div class="col-sm-6">
              <label for="width" class="col-form-label">Szerokość</label>
              <input type="number" min="0" id="width" class="form-control" />
            </div>
            <div class="col-sm-6">
              <label for="height" class="col-form-label">Wysokość</label>
              <input type="number" min="0" id="height" class="form-control" />
            </div>
            <div class="col-7">
              <label for="ram" class="col-form-label">Pojemność RAM</label>
              <input type="number" min="0" id="ram" class="form-control" />
            </div>
            <div class="col-5">
              <label for="ram" class="col-form-label">Jednostka</label>
              <select class="form-select" name="ram" id="ram">
                <option selected>Wybierz jednostkę</option>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
              </select>
            </div>
            <div class="col-7">
              <label for="flash" class="col-form-label">Pojemność Flash</label>
              <input type="number" min="0" id="flash" class="form-control" />
            </div>
            <div class="col-5">
              <label for="flash" class="col-form-label">Jednostka</label>
              <select class="form-select" name="flash" id="flash">
                <option selected>Wybierz jednostkę</option>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
              </select>
            </div>
            <div class="col-sm-8">
              <label for="temp" class="col-form-label">Max temperatura</label>
              <input type="number" min="0" id="temp" class="form-control" />
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
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Zapisz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
