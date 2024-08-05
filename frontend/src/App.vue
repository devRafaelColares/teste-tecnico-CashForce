<template>
  <div id="app">
    <div class="container">
      <Sidebar />
      <div class="content">
        <HeaderComponent />
        <InvoiceTable />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import HeaderComponent from './components/Header.vue';
import InvoiceTable from './components/InvoiceTable.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    HeaderComponent,
    InvoiceTable
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>