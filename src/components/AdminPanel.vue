<template>
  <q-page>
    <q-splitter v-model="splitterModel" horizontal>
      <div class="row q-pa-md">
        <div class="col-12">
          <q-btn color="white" text-color="black" label=" Меню" class="fit" @click.stop />
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select v-model="Category" :options="options" label="Категории" bg-color="white" color="red" />
          </div>
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select v-model="position" :options="options" label="Позиция меню" bg-color="white" color="red" />
          </div>
          <br />
          <q-input v-model="title" label="Наименование" bg-color="white" color="red" />
          <br />
          <q-input v-model="price" label="Цена" icon="currency_ruble" color="red" bg-color="white" type="number" filled
            style="max-width: 200px" />
          <br />
          <div class="q-gutter-sm">
            <q-editor v-model="structure" flat placeholder="СОСТАВ" :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }" />
          </div>
          <br />
        </div>
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled id="fileItem" type="file" Placeholder="Фотография блюда" v-model="img" />
      </div>
      <div class="row justify-between q-pa-md">
        <div class="col-4">
          <q-btn color="green" text-color="white" label=" Сохранить" class="fit" @click="addMenus" />
        </div>
        <div class="col-4">
          <q-btn color="red" text-color="white" label="Удалить" class="fit" @click="deleteMenu" />
        </div>
      </div>
    </q-splitter>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Новости" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor v-model="textNews" :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }" />
        </div>
        <br />
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled type="file" hint="Картинка" v-model="imgNews" />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn color="green" text-color="white" label=" Сохранить" class="fit" @click="saveNews" />
      </div>
      <div class="col-4">
        <q-btn color="red" text-color="white" label="Удалить" class="fit" />
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Акции" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor v-model="textPromotion" :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }" />
        </div>
        <br />
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled type="file" hint="Картинка" v-model="imgPromo" />
        <br />
        <q-input v-model="promocod" label="Промокод" bg-color="white" color="red" />
        <br />
        <q-input v-model="percent" Placeholder="Процент скидки" icon="currency_ruble" color="red" bg-color="white"
          type="number" filled />
        <br />
        <q-input v-model="date" label="Действителен до: " color="red" bg-color="white" type="date" filled />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn color="green" text-color="white" label=" Сохранить" class="fit" @click="savePromotion" />
      </div>
      <div class="col-4">
        <q-btn color="red" text-color="white" label="Удалить" class="fit" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import db from 'src/boot/firebase';
import { Base64 } from 'js-base64';
export default {
  setup() {
    return {

      model: ref(null),
      price: ref(null),
      title: ref(""),
      options: [],
      menu: ref(null),
      news: ref(null),
      promotion: ref(null),
      Category: ref(null),
      img: ref(null),
      splitterModel: ref(50),
      promocod: ref(""),
      date: ref(null),
      structure: ref(''),
      textNews: ref(""),
      imgNews: ref(null),
      textPromotion: ref(""),
      imgPromo: ref(null),
      percent: ref(""),
      imgbase64: ref(""),

    };
  },
  methods: {

    saveNews() {
      let newNews = {
        textNews: this.textNews,
        imgNews: this.imgNews,
      };


      db.collection("News")
        .add(newNews)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Ошибка добавления: ", error);
        });

      this.newNewsContent = "";
      console.log("Новость сохранена ");
    },
    savePromotion() {
      let newPromotion = {
        textPromotion: this.textPromotion,
        imgPromo: this.imgPromo,
        promocod: this.promocod,
        percent: this.percent,
        date: this.date,

      };


      db.collection("Promotion")
        .add(newPromotion)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Ошибка добавления: ", error);
        });

      this.newPromotionContent = "";
      console.log("Промоакция сохранена ");
    },
    addMenus() {
      const formData = {
      }
      let newBurger = {

        Category: this.Category,
        //img: this.img,
        price: this.price,
        structure: this.structure,
        title: this.title,
      };


      db.collection("Burger")
        .add(newBurger)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Ошибка добавления: ", error);
        });

      this.newBurgerContent = "";
      console.log("Позиция сохранена ");
      const blob = new Blob([this.img], { type: "image/png" })
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = () => {
        this.imgbase64 = reader.result
      }


    },
  },

  removeNews() { },
  removePromotion() { },
  deleteMenu() {
    console.log("Клик!!");
    //let menuId = MenuContent.id;
    db.collection("Burger")
      .doc(menuId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });


  },
  imgToBase64() {
    var file = document.getElementById('fileItem').querySelector("fileItem").files[0]
    this.imgbase64 = Base64.encode(file);
  }
}


</script>


<style>
</style>
