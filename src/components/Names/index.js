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
