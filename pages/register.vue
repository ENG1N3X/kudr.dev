<template>
  <b-container style="margin: auto">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <h3 class="mainTitle mb-5 text-center">Регистрация</h3>
      </b-col>
      <b-col cols="6">
        <b-form @submit.prevent="onSubmit">
          <b-form-group>
            <b-form-input v-model.trim="form.name" type="text" placeholder="Введите имя" class="mb-2" required></b-form-input>
            <span v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="color-error">Имя должно содержать от 2х символов.<br /></span>
            <span v-if="$v.form.name.$dirty && !$v.form.name.maxLength" class="color-error">Имя должно содержать не более 15ти символов.</span>
          </b-form-group>
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
            <nuxt-link to="/login">Уже есть аккаунт?</nuxt-link>
            <b-button type="submit" variant="success">Зарегистрироваться</b-button>
          </div>
        </b-form>
      </b-col>
    </b-row>
    <b-row v-if="isReg" class="justify-content-center mt-2">
      <b-col cols="4" class="text-center bg-a5a p-3 rounded">
        <span class="d-block color-fff mb-2">Аккаунт успешно создан.<br />Чтобы войти нажмите:</span>
        <nuxt-link to="/login" class="btn btn-info">Вход</nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        name: 'Name',
        login: 'Login',
        password: 'Password'
      },
      isReg: false
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(15)
      },
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
        this.isReg = false
        await this.$store.commit('CLEAR_ERROR')
        await this.$store.dispatch('users/usersList/createUser', JSON.parse(JSON.stringify(this.form)))
      } catch (e) {
        console.error(e)
      }

      if (this.$store.getters['error']) {
        console.log(this.$store.getters['error'])
      } else {
        console.log(`Логин ${this.form.login} зарегистрирован.`)
        this.isReg = true
        this.formReset()
      }
    },
    formReset() {
      this.form.name = ''
      this.form.login = ''
      this.form.password = ''
    }
  }
}
</script>
