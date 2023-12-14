<script setup>
defineProps({
  volunteer: {
    type: Object,
    required: true
  }
})

</script>

<template>
    <div class="volunteer-card">
      <!-- Display volunteer data here -->
      <h2>{{ volunteer.forename }} {{ volunteer.surname }}</h2>
      <span v-if="volunteer.unavailable.length">Unavailable on {{ volunteer.unavailable.join(', ') }}</span>
    </div>
</template>

<style scoped>
.volunteer-card {
  padding: 5px;
  width: 200px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.volunteer-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.volunteer-link {
  color: darkslateblue;
  text-decoration: none;
}
</style>
