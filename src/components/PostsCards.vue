<script>
export default {
    name: 'PostsCards',
    props: [
        'posts',
        
    ],
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<template lang="">
    <div class="col-5 project-card my-2 p-2 border border-dark rounded">   
        <img :src="`http://127.0.0.1:8000/storage/${posts.thumb}`" class="card-img-top img-fluid mb-3" alt="#">
        <div class="card-body">                  
            <h5 class="card-title mb-2">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <button class="btn btn-primary">
                <router-link :to="{ name: 'single-post', params: { id: project.id } }" class="nav-link ">
                    Show more
                </router-link>
            </button>
        </div>
    </div>
</template>
<style  lang="scss" scoped></style>