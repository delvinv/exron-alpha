<template>
    <div class="card">
        <Panel header="Dates booked off">
            <Card v-for="(date,index) in props.availabilityList" :key="index">
                <template #content>
                    <p class="m-0">
                        {{date.toString()}}
                    </p>
                </template>
            </Card>
        </Panel>
    </div>
</template>

<script setup>
    // import AvailabilityCard from '@/components/VolunteerEditor/AvailabilityCard.vue';
    // import { defineProps, defineComponent, PropType } from 'vue';
    
    const props =  defineProps({
        availabilityList: {
            type: Array,
            required: true, // You can set it as required or not based on your needs
            default: () => [], // You can set a default value if needed
            // validator: (value) => {
            //     // Validate each element of the array to be a string
            //     return value.every((item) => typeof item === 'string');
            // },
            },
    })
</script>
