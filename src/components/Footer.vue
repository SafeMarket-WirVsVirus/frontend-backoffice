<template>
<footer>
    <a class="text-light"
        :href="navItem.path"
        :active="navItem.isCurrent === true"
        v-for="(navItem, index) in navigationItems"
        :key="index"
    >
    <span v-html="navItem.icon"></span>
        <div>{{ navItem.navTitle }}</div>
    </a>
    
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    const navigationPages = ['Home', 'Check']
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
          icon: route.icon,
          isCurrent
        })

        return accumulator
      }, [])
    }
  }
}
</script>
