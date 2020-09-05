<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" class="mb-30">
        <h2 class="text-center color-fff">Your profile</h2>
        <span class="status founder" v-if="form.admin == 2">Founder</span>
        <span class="status admin" v-else-if="form.admin == 1">Administrator</span>
        <span class="status" v-else>User</span>
      </b-col>
      <b-col cols="10" lg="8" xl="6">
        <b-form>
          <b-form-group class="mb-20">
            <label class="color-fff">Your name</label>
            <b-input type="text" v-model="form.name" />
            <span v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="color-error">Name must contain 3 characters.<br /></span>
            <span v-if="$v.form.name.$dirty && !$v.form.name.maxLength" class="color-error">Name must contain no more than 21 characters.<br /></span>
          </b-form-group>
          <b-form-group class="mb-20">
            <label class="color-fff">Your login</label>
            <b-input type="text" disabled v-model="form.login" />
          </b-form-group>
          <b-form-group class="mb-20">
            <label class="color-fff">Your password</label>
            <b-input type="password" v-model="form.password" placeholder="Write new password here" />
            <span v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="color-error">The password must contain at least 3 characters.<br /></span>
            <span v-if="$v.form.password.$dirty && !$v.form.password.maxLength" class="color-error">The password must contain no more than 21 characters.</span>
          </b-form-group>
          <b-row class="mb-20 justify-content-center">
            <b-col col md="6">
              <b-form-group class="mb-20">
                <label class="color-fff">Created</label>
                <b-input type="text" v-model="form.created" disabled />
              </b-form-group>
            </b-col>
            <b-col col md="6" v-if="form.modified">
              <b-form-group class="mb-20">
                <label class="color-fff">Last modified</label>
                <b-input type="text" v-model="form.modified" disabled />
              </b-form-group>
            </b-col>
          </b-row>
          <b-button block class="bg-green" type="submit" @click.prevent="update(form)">Update profile</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  head: {
    title: 'Profile'
  },
  data() {
    return {
      form: {
        id: this.$auth.user.id,
        name: this.$auth.user.name,
        login: this.$auth.user.login,
        password: '',
        created: this.$auth.user.created,
        modified: this.$auth.user.modified,
        admin: this.$auth.user.admin
      }
    }
  },
  middleware: ['auth'],
  validations: {
    form: {
      name: {
        minLength: minLength(3),
        maxLength: maxLength(21)
      },
      password: {
        minLength: minLength(3),
        maxLength: maxLength(21)
      }
    }
  },
  mounted() {
    this.$store.commit('CLEAR_ERROR')
  },
  methods: {
    async update(form) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        await this.$store.commit('CLEAR_ERROR')
        await this.$axios.$put('/api/v1/user/update/' + form.id, form)
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
    }
  }
}
</script>

<style scoped lang="sass">
.status
    display: block
    text-align: center
    background: #a5a5a5
    max-width: 200px
    margin: 0 auto
    color: #fff
    padding: 5px 0
    border-radius: 8px 0 8px 0
    &.founder
        background: #00c58e
    &.admin
        background: #9e1616
</style>
