<script>
import axios from 'axios';
export default {
    name: "PostList",
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            posts_API: 'api/posts',
            loading: true,
            posts: null,
            error: null,
            max_text_lenght: 100,
        }
    },
    methods: {
        getPosts(url) {
            axios
                .get(url)
                .then(response => {
                    //console.log(response);
                    this.posts = response.data.posts
                    this.loading = false
                })
                .catch(error => {
                    //console.log(error);
                    this.error = error.message
                })
        },
        getImageFromPath(path) {
            //console.log(this.base_url + 'storage/' + path);
            return this.base_url + 'storage/' + path;
        },
        prevPage(path) {
            console.log(path);
            this.getPosts(path);
        },
        nextPage(path) {
            //console.log(path);
            this.getPosts(path);
        },
        /**
         * 
         * @param {string} text the text to truncate
         */
        truncateText(text) {
            if (text.length > this.max_text_lenght) {
                //console.log(text.slice(0, 30));
                //console.log(text.substring(0, 30));
                return text.slice(0, this.max_text_lenght) + '...';
            }
            //console.log(text);
            return text
        }
    },
    mounted() {
        const url = this.base_url + this.posts_API
        console.log(url);
        this.getPosts(url)
    }
}
</script>

<template>
</template>

<style lang="scss" scoped></style>