<template>
  <div class="portfolio-homepage">
    <header>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>Welcome to my Portfolio!</h2>
        <p>{{ welcomeMessage }}</p>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>info info info</p>
        <ul>
          <li>Email: simobaco99@gmail.com</li>
          <li>Phone: 380649574</li>
          <li>
            Website: <a :href="contactWebsite">{{ contactWebsite }}</a>
          </li>
        </ul>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style lang="scss" scoped></style>
