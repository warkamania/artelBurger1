<template>
    <q-page>
        <q-card v-bind:class="{
            yellow: accept,
            green: sent
        }">
            <q-card-section>
                <div class=" row wrap justify-center items-start content-start">
                    Номер заказа:
                </div>
                <div class="row">
                    <div class="col-6" style="color: black">Наименование: {{ Title }}</div>
                    <div class="col-6">Колличество: {{ Count }}</div>
                </div>
                <div class="row">
                    <div class="col-6">Адрес:{{ Adres }}</div>
                    <div class="col-6">Телефон:{{ Telephone }}</div>
                </div>
                <div class="row">
                    <div class="col-6">Сумма:{{ Price }}</div>
                    <div class="col-6">Способ оплаты:{{ Options }}</div>
                </div>
                <div class="row">
                    Дата и время заказ: {{ datee }}
                </div>

                <div class=" row">
                    <q-stepper v-model="step" ref="stepper" color="red" animated>
                        <q-step :name="1" title="Принято" icon="settings" :done="step > 1" done-color="green" />
                        <q-step :name="2" title="Готовится" icon="create_new_folder" :done="step > 2"
                            done-color="green" />
                        <q-step :name="3" title="Отправлен" icon="add_comment" done-color="green" />
                        <template v-slot:navigation>
                            <q-stepper-navigation>
                                <q-btn @click="$refs.stepper.next()" color="red"
                                    :label="step === 3 ? 'Финиш' : 'Следующий'" />
                                <q-btn v-if="step > 1" flat color="red" @click="$refs.stepper.previous()" label="Назад"
                                    class="q-ml-sm" />
                            </q-stepper-navigation>
                        </template>
                    </q-stepper>
                </div>

            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { ref } from 'vue';
import db from 'src/boot/firebase';
import _ from "lodash"
export default {
    setup() {
        return {
            list: ref([]),
            accept: ref(false),
            sent: ref(false),
            step: ref(),
            date: ref(Date)
        }
    },
    async mounted() {
        db.collection("Card").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {

                const burgerChange = change.doc.data();

                if (change.type === "added") {
                    console.log("New burger: ", burgerChange);
                    this.list.unshift(burgerChange);
                }
                if (change.type === "modified") {
                    console.log("Modified burger: ", burgerChange);
                    this.list.unshift(burgerChange);
                }
                if (change.type === "removed") {
                    console.log("Removed burger: ", burgerChange);
                    this.list.unshift(burgerChange);
                }
            });
        });
    },
    computed: {
        Title() {
            return this.list.length > 0 ? this.list[0].title : "";
        },
        Count() {
            return this.list.length > 0 ? this.list[0].count : "";
        },
        Adres() {
            return this.list.length > 0 ? this.list[0].adres : "";
        },
        Telephone() {
            return this.list.length > 0 ? this.list[0].tel : "";
        },
        Price() {
            return this.list.length > 0 ? this.list[0].price : "";
        },
        Options() {
            return _.flatten(this.list.length > 0 ? this.list[0].options : "");
        },
        datee() {
            return this.list.length > 0 ? this.list[0].date : "";
        }

    },
    methods: {
        acceptt() {
            this.accept = true;
        },
        sentt() {
            this.sent = true;
        }

    }
}
</script>

<style>
.yellow {
    background: yellow;
}

.green {
    background: green;
}
</style>