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

<script src="./index.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./styles.scss" scoped lang="scss" />
