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
            <span v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="color-error">Имя должно содержать от 2х символов.</span>
            <span v-if="$v.form.name.$dirty && !$v.form.name.maxLength" class="color-error">Имя должно содержать не более 15ти символов.</span>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="form.login" type="text" placeholder="Введите login" class="mb-2" required></b-form-input>
            <span v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="color-error">Логин должен содержать от 3х символов.</span>
            <span v-if="$v.form.login.$dirty && !$v.form.login.maxLength" class="color-error">Логин должен содержать не более 21ого символов.</span>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="form.password" type="password" placeholder="Введите пароль" class="mb-2" required></b-form-input>
            <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">Пароль должен содержать от 3х символов.</span>
            <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">Пароль должен содержать не более 21ого символов.</span>
          </b-form-group>
          <b-button type="submit" variant="success" style="display: flex; margin-left: auto;">Зарегистрироваться</b-button>
        </b-form>
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
        name: '',
        login: '',
        password: ''
      }
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
  methods: {
    onSubmit(e) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      console.log(JSON.stringify(this.form))
      //   this.$router.push('/')
      this.formReset()
    },
    formReset() {
      this.form.name = ''
      this.form.login = ''
      this.form.password = ''
    }
  }
}
</script>
