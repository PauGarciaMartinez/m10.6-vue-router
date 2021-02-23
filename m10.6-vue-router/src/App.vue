<!-- TEMPLATE -->
<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Customers' }">Customers</router-link>
    <router-link :to="{ name: 'Suppliers' }">Suppliers</router-link>
    <router-link :to="{ name: 'Warehouse' }">Warehouse</router-link>
    <router-link :to="{ name: 'Store' }">Store</router-link>
  </div>
  <router-view/>
</template>

<!-- STYLE -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.7rem;
  text-decoration: none;
  margin: 0.5rem;
  border-radius: 0.2rem;
}

#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  background-color: rgb(103, 177, 150);
  color: white;
}
</style>
