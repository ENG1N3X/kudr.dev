<template>
  <b-col cols="3" class="bg-a5a rounded mb-4">
    <b-form>
      <b-form-group label="Введите имя" class="mb-2">
        <b-form-input v-model="form.name" class="adminCard__input" placeholder="Имя" required></b-form-input>
        <span v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="color-error">Имя должно содержать от 2х символов.<br /></span>
        <span v-if="$v.form.name.$dirty && !$v.form.name.maxLength" class="color-error">Имя должно содержать не более 15ти символов.</span>
      </b-form-group>
      <b-form-group label="Введите логин" class="mb-2">
        <b-form-input v-model="form.login" class="adminCard__input" placeholder="Логин" required></b-form-input>
        <span v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="color-error">Логин должен содержать от 3х символов.<br /></span>
        <span v-if="$v.form.login.$dirty && !$v.form.login.maxLength" class="color-error">Логин должен содержать не более 21ого символов.<br /></span>
        <span v-if="$store.getters['error']" class="color-error">{{ $store.getters['error'] }}</span>
      </b-form-group>
      <b-form-group label="Введите пароль" class="mb-2">
        <b-form-input v-model="form.password" class="adminCard__input" placeholder="Пароль" required></b-form-input>
        <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">Пароль должен содержать от 3х символов.<br /></span>
        <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">Пароль должен содержать не более 21ого символов.</span>
      </b-form-group>
      <b-form-group label="Выберите права доступа" class="mb-2">
        <b-form-radio v-model="form.admin" value="0">Не администратор</b-form-radio>
        <b-form-radio v-model="form.admin" value="1">Администратор</b-form-radio>
        <b-form-radio v-model="form.admin" value="2">Основатель</b-form-radio>
      </b-form-group>
      <b-button block variant="success" type="submit" class="color-fff" @click.prevent="create(form)">Создать</b-button>
    </b-form>
  </b-col>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        name: 'name',
        login: 'login',
        password: 'password',
        admin: 0
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
  mounted() {
    this.$store.commit('CLEAR_ERROR')
  },
  methods: {
    async create(form) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        await this.$store.commit('CLEAR_ERROR')
        await this.$store.dispatch('users/createUser', JSON.parse(JSON.stringify(form)))
      } catch (e) {
        console.error(e)
      }
      if (this.$store.getters['error']) {
        console.log(this.$store.getters['error'])
      } else {
        console.log(`Логин ${this.form.login} зарегистрирован.`)
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
