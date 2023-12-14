<script setup>
defineProps({
  role: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div class="role-card">
      <!-- Display volunteer data here -->
      <h3>{{ role.name }}</h3>
      <span v-if="role.numbers">Reqiures: {{ role.numbers }}</span>
    </div>
</template>

<style scoped>
.role-card {
  padding: 5px;
  width: 200px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.role-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.role-link {
  color: darkslateblue;
  text-decoration: none;
}
</style>
