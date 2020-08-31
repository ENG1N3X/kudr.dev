<template>
  <b-col cols="3" class="mb-4">
    <b-form>
      <b-form-group>
        <span v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="color-error">Имя должно содержать от 2х символов.<br /></span>
        <span v-if="$v.form.name.$dirty && !$v.form.name.maxLength" class="color-error">Имя должно содержать не более 15ти символов.</span>
        <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">Пароль должен содержать от 3х символов.<br /></span>
        <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">Пароль должен содержать не более 21ого символов.</span>
      </b-form-group>
      <b-form-group label="Введите новое имя" class="mb-2">
        <b-form-input v-model="form.name" class="adminCard__input" placeholder="Имя" required></b-form-input>
      </b-form-group>
      <b-form-group label="Логин аккаунта" class="mb-2">
        <b-form-input class="adminCard__input" :placeholder="form.login" disabled></b-form-input>
      </b-form-group>
      <b-form-group label="Введите новый пароль" class="mb-2">
        <b-form-input v-model="form.password" class="adminCard__input" placeholder="Пароль" required></b-form-input>
      </b-form-group>
      <b-form-group label="Выберите права доступа" class="mb-2">
        <b-form-radio v-model="form.admin" value="0">Не администратор</b-form-radio>
        <b-form-radio v-model="form.admin" value="1">Администратор</b-form-radio>
        <b-form-radio v-model="form.admin" value="2">Основатель</b-form-radio>
      </b-form-group>
      <b-form-group>
        <b-button variant="warning" type="submit" class="color-fff" @click.prevent="edit(user._id, form)">Изменить</b-button>
        <b-button variant="danger" type="submit" class="color-fff float-right" @click.prevent="remove(user._id)">Удалить</b-button>
      </b-form-group>
      <b-form-group>
        <span class="color-000"
          >Создан:<br />
          {{ form.created }}.</span
        >
        <span class="color-000" v-if="form.modified"
          >Последние правки:<br />
          {{ form.modified }}.</span
        >
      </b-form-group>
    </b-form>
  </b-col>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        name: this.user.name,
        login: this.user.login,
        password: this.user.password,
        admin: this.user.admin,
        modified: this.user.modified,
        created: this.user.created
      },
      isReg: false
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(15)
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
    async edit(id, form) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        await this.$store.commit('CLEAR_ERROR')
        await this.$axios.$put('/api/v1/user/update/' + id, form)
        await this.$store.dispatch('users/getAllUsers')
      } catch (e) {
        await this.$store.commit('SET_ERROR', e.response.data.message, { root: true })
        console.error(e)
      }
      if (this.$store.getters['error']) {
        console.log(this.$store.getters['error'])
      } else {
        console.log(`Данные логина ${this.form.login} изменены.`)
      }
    },
    async remove(id) {
      try {
        await this.$axios.$delete('/api/v1/user/remove/' + id)
        await this.$store.dispatch('users/getAllUsers')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
