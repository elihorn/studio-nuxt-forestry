<template>
    <section>
        <ul class="list">
            <NuxtLink  
                v-for="post in posts" 
                :key="post.title" 
                :to="{ name: 'work-slug', params: { slug: post.slug } }"
            >
                <li>
                    {{ post.slug }}
                    <div class="hero_image">
                        <img :src="post.media" :alt="post.title">
                    </div>
                    <div class="blogList__info">
                        <h2>{{ post.title }}</h2>
                    </div>
                </li>
            </NuxtLink>                  
        </ul>
    </section>                       
</template>
<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }        
        }
    }
</script>