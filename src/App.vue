<template>
  <div class="pure-g">
    <appheader></appheader>
    <applist></applist>
    <appform></appform>
  </div>
</template>

<script>
import AppHeader  from  './components/AppHeader'
import AppList    from  './components/AppList'
import AppForm    from  './components/AppForm'

export default {
  components: {
    appheader:AppHeader,
    applist:AppList,
    appform:AppForm
  }
}
</script>