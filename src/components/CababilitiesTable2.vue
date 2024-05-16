<script setup>
import { ref } from 'vue'
import { useRoleMatrixStore } from '@/stores/capabilityRoleMatrix'
import { useRoleStore } from '@/stores/role'
import { useVolunteerStore } from '@/stores/volunteer'
import { storeToRefs } from 'pinia'

// const roleMatrixStore = useCapabilityRoleMatrixStore()
// const roleStore = useRoleStore()
// const { getRoleById } = storeToRefs(roleStore)
// const volunteerStore = useVolunteerStore()
// const { getVolunteerById } = storeToRefs(volunteerStore)
</script>

<template>
  <h2>Training and Volunteer Capabilities</h2>
</template>
