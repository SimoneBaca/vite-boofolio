<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li>
                    <router-link :to="{ name: 'homepage' }" class="nav-link">
                        HomePage
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'about-us' }" class="nav-link">
                        About-US
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects' }" class="nav-link">
                        Projects
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    name: 'AppHeader'
}
</script>
<style lang="scss">
ul {
    li {
        list-style-type: none;
        display: inline;
        margin-right: 0.5rem;
    }
}
</style>