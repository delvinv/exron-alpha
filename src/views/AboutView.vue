<script setup>
// import { Role, Scheduler, Volunteer, Restriction } from '@/services/Scheduler'

// let sched = new Scheduler()
// sched.volunteers = [
//   new Volunteer('Albus'),
//   new Volunteer('Audrey'),
//   new Volunteer('Jip'),
//   new Volunteer('Cait'),
// ];
// sched.roles = [
//   new Role('Vacuum', [Restriction.NoConsecutiveWeeks, Restriction.NoOtherRole]),
//   new Role('Cook', [Restriction.NoConsecutiveWeeks, Restriction.NoOtherRole]),
// ];
// let res = sched.schedule();
// res.then((out) => console.log(out));

import { generateRoster } from '@/services/Scheduler'

let res = generateRoster(2000);
res.then((out) => {
  if (out === null) {
    console.log("No possible roster that abides to all rules");
  } else {
    console.log(out)
  }
});

</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
