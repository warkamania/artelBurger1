<template>
  <q-page>
    <q-splitter v-model="splitterModel" horizontal>
      <div class="row q-pa-md">
        <div class="col-12">
          <q-btn color="white" text-color="black" label=" Меню" class="fit" />
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select
              v-model="model"
              :options="options"
              label="Категории"
              bg-color="white"
              color="red"
            />
          </div>
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select
              v-model="model"
              :options="options"
              label="Позиция меню"
              bg-color="white"
              color="red"
            />
          </div>
          <br />
          <q-input
            v-model="text"
            label="Наименование"
            bg-color="white"
            color="red"
          />
          <br />
          <q-input
            label="Цена"
            icon="currency_ruble"
            color="red"
            bg-color="white"
            type="number"
            filled
            style="max-width: 200px"
          />
          <br />
        </div>
        <q-input
          color="red"
          bg-color="white"
          @update:model-value="
            (val) => {
              file = val[0];
            }
          "
          filled
          type="file"
          hint="Фотография блюда"
        />
      </div>
      <div class="row justify-between q-pa-md">
        <div class="col-4">
          <q-btn
            color="white"
            text-color="black"
            label=" Сохранить"
            class="fit"
          />
        </div>
        <div class="col-4">
          <q-btn color="white" text-color="black" label="Удалить" class="fit" />
        </div>
      </div>
    </q-splitter>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Новости" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor
            v-model="editor"
            :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }"
          />
        </div>
        <br />
        <q-input
          color="red"
          bg-color="white"
          @update:model-value="
            (val) => {
              file = val[0];
            }
          "
          filled
          type="file"
          hint="Картинка"
        />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn
          color="white"
          text-color="black"
          label=" Сохранить"
          class="fit"
        />
      </div>
      <div class="col-4">
        <q-btn color="white" text-color="black" label="Удалить" class="fit" />
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Акции" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor
            v-model="editor"
            :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }"
          />
        </div>
        <br />
        <q-input
          color="red"
          bg-color="white"
          @update:model-value="
            (val) => {
              file = val[0];
            }
          "
          filled
          type="file"
          hint="Картинка"
        />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn
          color="white"
          text-color="black"
          label=" Сохранить"
          class="fit"
        />
      </div>
      <div class="col-4">
        <q-btn color="white" text-color="black" label="Удалить" class="fit" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref(null),
      options: [],
      menu: ref(false),
      news: ref(false),
      promotion: ref(false),
      splitterModel: ref(50),
    };
  },
};
</script>

<style></style>
