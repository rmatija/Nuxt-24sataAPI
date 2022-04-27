<template>
  <div class="welcome">
    <div v-if="showLogin">
      <h2>Prijava</h2>
      <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="Email ili korisničko ime.." />
        <input type="password" required placeholder="Lozinka.." />
        <button
          class="px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
        >
          Prijavi se
        </button>
      </form>
      <p>
        Nisi jos registriran?
        <span @click="showLogin = false">Registriraj se.</span>
      </p>
    </div>
    <div v-else>
      <h2>Registriraj se</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="Korisničko ime.." />
        <input type="email" required placeholder="Email.." />
        <input type="password" required placeholder="Lozinka.." />
        <button
          class="px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
        >
          Registriraj se
        </button>
      </form>
      <p>
        Već si registriran?
        <span @click="showLogin = true">Ulogiraj se.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.welcome {
  text-align: center;
  margin-top: 10rem;

  form {
    width: 350px;
    margin: 20px auto;
    background: #90b9f7;
    padding: 50px;
    border-radius: 20px;
  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
