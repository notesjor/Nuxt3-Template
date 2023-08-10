<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

//counter.count++
// with autocompletion ✨
//counter.$patch({ count: counter.count + 1 })
// or using an action instead
//counter.increment()
</script>

<template>
    <div>
        <v-row>
            <v-col>
                <div>
                    <h1 class="text-3xl font-bold underline">
                        {{ appName }}
                    </h1>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>
                    {{ appDescription }}
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div>
                    <v-btn @click="counter.increment()" color="primary" dark>
                        {{ counter.count }}
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            appName: 'Nuxt 3',
            appDescription: 'The Intuitive Vue Framework'
        }
    },
    mounted() {
        this.appName = this.$config.public.appName;
        this.appDescription = this.$config.public.appDescription;
    },
}
</script>

<style lang="scss" scoped></style>