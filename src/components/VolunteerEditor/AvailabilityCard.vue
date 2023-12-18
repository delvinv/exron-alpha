<script setup>
    const props =  defineProps({
        empty: Boolean,
    })
</script>

<template>
    <Card>
    <!-- <template #title> Simple Card </template> -->
    <template #content>
        <p class="m-0">
            No dates added yet.
        </p>
    </template>
    </Card>
</template>