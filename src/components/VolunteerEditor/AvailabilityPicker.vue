<script setup>
    import { ref } from "vue";

    const props =  defineProps({
        showForm: Boolean,
    })

    const dates = ref();

    const onSubmit = (event) => {
        console.log(typeof dates.value[0]);
        console.log(event);
    };
</script>

<template>
    <Card v-show="props.showForm">
        <template #content>
            <div>
                <form @submit.prevent="onSubmit" class="flex flex-column gap-2">
                    <span class="p-float-label">
                        <Calendar id="date" dateFormat="dd/mm/yy" v-model="dates" selectionMode="range" :manualInput="false" showButtonBar inputId="unavailable_date" showIcon/>
                        <label for="unavailable_date">Select dates</label>
                    </span>
                    <Button label="Submit" icon="pi pi-save" severity="success" @click="onSubmit"
                    aria-label="Submit" iconPos="right" />
                </form>
            </div>
        </template>
    </Card>
</template>