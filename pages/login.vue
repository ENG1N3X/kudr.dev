<template>
  <b-container style="margin: auto">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <h3 class="mainTitle mb-5 text-center">Вход</h3>
      </b-col>
      <b-col cols="4">
        <b-form @submit.prevent="onSubmit">
          <b-form-group>
            <b-form-input v-model="form.login" type="text" placeholder="Введите login" class="mb-2" required></b-form-input>
            <span v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="color-error">Логин должен содержать от 3х символов.<br /></span>
            <span v-if="$v.form.login.$dirty && !$v.form.login.maxLength" class="color-error">Логин должен содержать не более 21ого символов.<br /></span>
            <span v-if="$store.getters['error']" class="color-error">{{ $store.getters['error'] }}</span>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="form.password" type="password" placeholder="Введите пароль" class="mb-2" required></b-form-input>
            <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">Пароль должен содержать от 3х символов.<br /></span>
            <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">Пароль должен содержать не более 21ого символов.</span>
          </b-form-group>
          <div class="d-flex justify-content-between align-items-center">
            <nuxt-link to="/register">Ещё нет аккаунта?</nuxt-link>
            <b-button type="submit" variant="success">Вход</b-button>
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
    title: 'Логин'
  },
  data() {
    return {
      form: {
        login: 'Login',
        password: 'Password'
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
