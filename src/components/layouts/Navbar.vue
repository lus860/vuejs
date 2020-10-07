<template>
  <nav class="mb-4 navbar navbar-expand-lg navbar-dark cyan">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand font-bold" id="navbarSuapportedContent-4">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/cat"><i class="fa fa-paw"></i>Cat</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dog"><i class="fa fa-paw"></i>Dog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/horse"><i class="fa fa-horse"></i> Hours</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {

            }
        },
        watch: {

        },
        computed: {


        },
        methods:{

        }
     }
</script>

<style scoped>
.hm-gradient {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
.navbar .dropdown-menu a:hover {
  color: #616161 !important;
}
.darken-grey-text {
  color: #2E2E2E;
}

</style>