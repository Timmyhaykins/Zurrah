<template>
    <form id="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input v-model="inputVal" type="text" placeholder="What are you interested in?" />
    </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return{
            inputVal:'',
        }
    },
})
</script>

<style>
    #search-bar{
        display: flex;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        color: #aaa;
    }
    
    #search-bar svg{
        width: 20px;
    }

    #search-bar input{
        flex: 1;
        border: none;
        outline: none;
        padding: 0px 10px;
    }

    #search-bar input::placeholder{
        color: #aaa;
    }

</style>
