<template>
  <li class="account-card">
    <div class="card-info">
      <p>{{ title }}</p>
     <img v-if="icon !== undefined || icon !== ''" :src="require(`@/assets/${icon}`)" /> 
      <span>{{ number }}</span>
    </div>
    <div class="card-amount">
      <p>{{ amount }}</p>
      <span>{{ currency }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showItem: true,
    };
  },
  props: {
    title: String,
    icon: String,
    number: String,
    amount: String,
    currency: String,
  },
});
</script>

<style>
.account-card {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 30px;
}

.account-card p {
  font-weight: 500;
}

.account-card img {
  width: 20px;
  position: relative;
  top: 5px;
}

.account-card span {
  margin-left: 20px;
  color: #aaa;
}
</style>
