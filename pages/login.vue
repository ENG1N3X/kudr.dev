<template>
  <b-container style="margin: auto">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <h3 class="mainTitle mb-5 text-center">Login to kudr.dev</h3>
      </b-col>
      <b-col cols="10" sm="8" md="6" lg="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group>
            <span v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="color-error">Login must contain 3 characters.<br /></span>
            <span v-if="$v.form.login.$dirty && !$v.form.login.maxLength" class="color-error">Login must contain no more than 21 characters.<br /></span>
            <span v-if="$store.getters['error']" class="color-error">{{ $store.getters['error'] }}</span>
            <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">The password must contain at least 3 characters.<br /></span>
            <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">The password must contain no more than 21 characters.</span>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="form.login" type="text" placeholder="Write login" class="mb-2" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="form.password" type="password" placeholder="Write password" class="mb-2" required></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-between align-items-center">
            <nuxt-link to="/register">Don't have an account yet?</nuxt-link>
            <b-button type="submit" variant="success">Login</b-button>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  head: {
    title: 'Login kudr.dev'
  },
  data() {
    return {
      form: {
        login: 'login',
        password: 'password'
      }
    }
  },
  validations: {
    form: {
      login: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(21)
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(21)
      }
    }
  },
  mounted() {
    this.$store.commit('CLEAR_ERROR')
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.$store.commit('CLEAR_ERROR')
        await this.$store.dispatch('login', JSON.parse(JSON.stringify(this.form)))
      } catch (e) {
        console.error(e)
      }

      if (this.$store.getters['error']) {
        console.log(this.$store.getters['error'])
      } else {
        console.log(`Логин ${this.form.login} авторизован.`)
        this.formReset()
      }
    },
    formReset() {
      this.form.login = ''
      this.form.password = ''
    }
  }
}
</script>
