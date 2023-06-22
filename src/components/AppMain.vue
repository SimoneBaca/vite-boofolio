<script>
import axios from 'axios';
import PostsCards from './PostsCards.vue';
export default {
    name: 'Appmain',
    components: {
       
        PostsCards
    },
    data() {
        return {
            projects: [],
            base_url: 'http://127.0.0.1:8000/',
            posts_API: 'api/posts',
        }
    },
    methods: {
        getPosts() {
            axios.get(this.urlAddress, {
                params: {
                }
            })
                .then((response) => {
                    this.posts = response.data.result.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getPosts();
    },
}
</script>
<template lang="">
    <section>
        <div class="container">
            <div class="row  justify-content-around">
           <!--     <h1 class="text-center">MyProjects</h1>  -->                  
           <PostsCards v-for="posts in posts" :project="posts" />
            </div>
        </div>
    </section>
</template>
<style  lang="scss" scoped></style>