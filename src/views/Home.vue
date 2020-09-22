<template>
  <div class="home">
    <Names />
  </div>
</template>

<script>
// @ is an alias to /src
import Names from '@/components/Names/Names.vue';

export default {
  name: 'Home',
  components: {
    Names,
  },
};
</script>
