<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <a class="navbar-brand" href="/">Backoffice</a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
            :href="navItem.path"
            :active="navItem.isCurrent === true"
            v-for="(navItem, index) in navigationItems"
            :key="index"
        >
          {{ navItem.navTitle }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    const navigationPages = ['Home', 'Check', 'Login']
    const navigationItems = this.getNavigationItems(navigationPages)

    return {
      navigationItems
    }
  },

  methods: {
    /**
     * Gets the navigation items for the template.
     *
     * @param {Array<String>} navigationPages
     * @returns {Array<{ name: String, navTitle: String, path: String, isCurrent: Boolean }>}
     */
    getNavigationItems (navigationPages) {
      return navigationPages.reduce((accumulator, routeName) => {
        const route = this.$router.options.routes.find(route => route.name === routeName)

        if (route == null) {
          return accumulator
        }

        const isCurrent = this.$route.name === route.name

        accumulator.push({
          name: route.name,
          navTitle: route.navTitle || route.name,
          path: route.path,
          isCurrent
        })

        return accumulator
      }, [])
    }
  }
}
</script>
