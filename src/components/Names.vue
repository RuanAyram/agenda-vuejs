<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addName()">
        <ValidationObserver ref="form">
          <ValidationProvider rules="min:3" v-slot="{ errors, invalid }">
            <input v-model="name" name="name" type="text" autocomplete="false"
                  placeholder="Enter a name here...">
            <span class="alert" v-if="invalid">{{ errors[0] }}</span>
          </ValidationProvider>
        </ValidationObserver>
      </form>

      <ul>
        <li v-for="(data, index) in names" :key='index'>
          <span>{{ data.name }}</span>
          <i class="fa fa-minus-circle" v-on:click="removeName(index)"></i>
        </li>
      </ul>
      <p>These are the friends' names.</p>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate';

extend('min', {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: 'The {_field_} field must have at least {length} characters',
});

export default {
  name: 'Names',
  data() {
    return {
      name: '',
      btnState: true,
      names: [
        { name: 'Alexander White' },
        { name: 'Mila Scott' },
        { name: 'Dylan Perez' },
        { name: 'Hannah Roberts' },
      ],
    };
  },
  methods: {
    changeName() {
      console.log(this.name);
    },
    addName() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        // Pushing and Resetting Values
        this.names.push({ name: this.name });
        this.name = '';

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
    removeName(id) {
      this.names.splice(id, 1);
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      flex-direction: row;
      padding: 20px;
      font-size: 1.3em;
      background-color: #E0EDF4;
      border-left: 5px solid #9CC3F6;
      margin-bottom: 2px;
      color: #3E5252;

      span {
        display: flex;
        flex-direction: row;
        width: 50%;
      }

      i {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        width: 50%;
        justify-content: flex-end;
      }
    }
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

</style>
