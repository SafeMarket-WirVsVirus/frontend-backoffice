<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Backoffice</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="/check">Ticket Validieren<span class="sr-only">(current)</span></a>
        </li>
       
        <li class="nav-item active">
          <a class="nav-link" :href="loginpath">{{loginname}}</a>
        </li>
      </ul>
      
    </div>
  </nav>
  <div class="container">
      <h1>NoQ Backoffice</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  data () {
    return {
      loginpath: 'Test',
      loginname: 'TEst',
    }
  },
  created: function(){
    
    // console.log(this.isLogedIn);
    // if(!this.isLogedIn){
    //   this.loginpath = "/logout";
    //   this.loginname = "Logout";
    // }else{
    //   this.loginpath = '/login';
    //   this.loginname = "Login";
    // }
  }
}
</script>
