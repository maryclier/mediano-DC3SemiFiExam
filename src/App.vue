<script setup>
</script>

<template>
  <div class="app">

    <header class="header">
      <h1>School Maintenance Request Manager</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/maintenance">Maintenance</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="container">
      <RouterView />
    </main>

  </div>
</template>