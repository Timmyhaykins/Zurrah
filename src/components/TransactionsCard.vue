<template>
    <li class="transaction-card">
      <div class="icon-container">
         <img v-if="icon !== undefined || icon !== ''" :src="require(`@/assets/${icon}`)" /> 
      </div>
    <div class="transaction-date">
      <p>{{ date }}</p>
      <span>{{ time }}</span>
    </div>
    <div class="transaction-details">
      <p>{{ channel }}</p>
      <span>{{ info }}</span>
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return{
            showItem:true,
        };
    },
    props: {
        icon: String,
        date: String,
        time: String,
        channel: String,
        info: String,
    },
})
</script>

<style>
    .transaction-card{
     display: flex;
     justify-content: flex-start;
     padding: 10px 5px 30px;
     margin-left: 10px;
    }

.transaction-card .icon-container{
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #eee;
}

.transaction-card .icon-container img {
    width:70%;
}

.transaction-card .transaction-date{
        margin-left: 30px;
}

    .transaction-card .transaction-details{
        margin-left: 30px;
    }

    .transaction-card p {
        font-weight: 500;
    }

    .transaction-card span{
        color: #aaa;
        font-size: 14px;
    }
</style>
