<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>
      Mussum Ipsum, cacilds vidis litro abertis.
      Interagi no mé, cursus quis, vehicula ac nisi.
      Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
      Sapien in monti palavris qui num significa nadis i pareci latim.
      Copo furadis é disculpa de bebadis, arcu quam euismod magna.
    </p>

    <p>
      A ordem dos tratores não altera o pão duris.
      Leite de capivaris, leite de mula manquis sem cabeça.
      Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
      Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name,
    };
  },
};
</script>
