<template>
    <div class="card">
        <Panel header="Dates booked off">
            <!-- <Card v-for="(date,index) in props.availabilityList" :key="index">
                <template #content>
                </template>
            </Card> -->
            <div class="card" v-for="(date,index) in props.availabilityList" :key="index">
                <div class="text">
                    <span class="date-span">{{date.toString()}}</span>
                    <Button class="btn-deleting" icon="pi pi-trash" severity="danger" text rounded aria-label="Delete" />
                </div>
            </div>
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

<style>
.date-span {
    margin-right: 30px;
    display:inline-block;
    vertical-align:middle;
}

.btn-deleting {
    display:inline-block;
    vertical-align:middle;
}

.card {
	 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
	 /* width: 50%; */
	 text-align: center;
     margin-bottom: 30px;
	}

.text {
    padding: 2px 3px;
}
</style>