<template>
  <div class="IndexPage container col-md-6 ">
    <h1 class="mx-auto mb-5">Login</h1>
    <router-link type="button" class="btn btn-primary" to="UserLogin">Login</router-link>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  props: {
    msg: String
  },
  methods(){
    // let user ={

    // }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
