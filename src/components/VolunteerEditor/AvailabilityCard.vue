<script setup>
    // const props =  defineProps({
    //     empty: Boolean,
    // })
</script>

<template>
    <Card>
        <template #content>
            <div>
                <span class="p-float-label">
                    <Calendar v-model="dates" selectionMode="range" :manualInput="false" showButtonBar inputId="unavailable_date" />
                    <label for="unavailable_date">Select dates</label>
                </span>
                <Button icon="pi pi-save" severity="success" rounded outlined aria-label="Save" />
            </div>
        </template>
    </Card>
</template>