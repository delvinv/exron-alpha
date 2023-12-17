<script setup>
    const props =  defineProps({
        empty: Boolean,
    })
</script>

<template>
    <Card>
    <!-- <template #title> Simple Card </template> -->
    <template #content>
        <p class="m-0" v-if="props.empty">
            No dates added yet.
        </p>
        <p class="m-0" v-else>
            Dates added yo!
        </p>
    </template>
    </Card>
</template>