<template>

  <div id="app">
    <header>
      <div class="user-settings">
        <svg class="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
      </div>
    </header>
    <div class="container">
      <router-view/>
    </div>
    <footer>
      <a href="home" class="text-light">
        <svg class="bi bi-house-door-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
          <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
        </svg>
        <div>Meine Filiale</div>
      </a>
      <a href="check" class="text-light">
        <svg class="bi bi-shield-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z" clip-rule="evenodd"/>
        </svg>
        <div>Einlass</div>
      </a>
    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {}
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

<style lang="scss" scoped>

  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  header{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 0;

    .user-settings{
      margin: 10px;
      height: 40px;
      width: 40px;
      background: grey;
      border-radius: 50%;
      text-align: center;

      svg{
        height: 40px;
        width: 20px;
      }
    }
  }

  .container {
    width: 100%;
    max-width: 500px;
    flex-grow: 1;
  }

  footer{
    display: flex;
    flex-grow: 0;
    background: grey;
    flex-direction: row;
    height: 80px;
    align-items: center;

    a{
      flex-grow: 1;
      text-align: center;

      svg{
        height: 30px;
        width: 30px;
        margin: 5px 0;
      }
    }
  }

</style>
