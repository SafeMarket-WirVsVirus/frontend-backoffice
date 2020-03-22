<template>
  <div>
    <h1>Meine Filialen</h1>
    <store-list />
    <a href="">weitere Filiale hinzufügen</a>
  </div>
</template>

<script>
import StoreList from "@/components/StoreList"

export default {
  name: 'Stores',
  components: { StoreList }
}
</script>
