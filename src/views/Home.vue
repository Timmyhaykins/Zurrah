<template>
  <div class="home">
    <ZurrahForm/>

    <h2 class="service-heading">Last Services</h2>
    <div class="services">
      <ServiceCard info="Make a SWIFT transfer" type="swift" />
      <ServiceCard info="Make card transfer" type="card" />
      <ServiceCard info="Recieve Money" type="recieve" />
      <ServiceCard info="Make a transfer" type="transfer" />
      <ServiceCard info="View account balance" type="balance" />
    </div>

    <div class="account-transactions">
      <!-- My Account -->
      <div class="my-accounts">
        <h2>My Accounts</h2>
        <div class="info-box">
          <ul>
            <AccountDetailCard title="Personal Card" icon="mastercard.png" number="*8070" amount="8045.00" currency="USD" />
            <AccountDetailCard title="Work Card" icon="visa.png" number="*4573" amount="125 728.00" currency="USD" />
            <AccountDetailCard title="Internet Card" icon="mastercard.png" number="*3478" amount="67 569.00" currency="USD" />
            <AccountDetailCard title="Credit Line" icon="mastercard (1).png" number="Bank Account" amount="35 000 000.00" currency="USD" />
          </ul>
          <button>Show All +5</button>
        </div>
      </div>
      <!-- My Last Transactions -->
      <div class="last-transactions">
        <h2>Last Transactions</h2>
        <div class="info-box">
          <ul>
            <Transactions-card icon="dropbox.png" date="10 Jul 2016" time="18:32" channel="Online Payment" info="DROPBOX INC, Dublin" />
            <Transactions-card icon="digital.png" date="9 Jul 2016" time="17:05" channel="Online Payment" info="Digital Ocean, New York" />
            <Transactions-card icon="mastercard (1).png" date="3 Jul 2016" time="15:40" channel="Recharge Card" info="Card *8040" />
            <Transactions-card icon="zara.png" date="2 Jul 2016" time="11:59" channel="Purchase" info="ZARA Magazine" />
          </ul>
          <button>Show All transactions</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ZurrahForm from "@/components/ZurrahForm.vue";
import ServiceCard from "@/components/ServiceCard.vue";
import AccountDetailCard from "@/components/AccountDetailCard.vue";
import TransactionsCard from "@/components/TransactionsCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    ZurrahForm,
    ServiceCard,
    AccountDetailCard,
    TransactionsCard,
  },
});
</script>

<style>
.home{
   padding:30px 3%;
   background-color: #e8eaec;
   overflow-x: hidden;
}
 
.home .services {
  white-space: nowrap;
  overflow: auto;
  display: flex;
  padding: 15px 0px;
  perspective: 1000px;
}

.home .services::-webkit-scrollbar {
  width: 0px;
}

.home .service-heading {
  font-weight: 500;
  color: #777;
  margin-top: 25px;
}

.home .account-transactions {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  height: auto;
  grid-gap: 20px;
}

.home .account-transactions h2{
  font-weight: 500;
  color: #777;
}

.home .account-transactions .info-box {
  border-radius: 8px;
  background-color: #fff;
  padding: 20px 8px;
  text-align: center;
  margin: 20px 5px;
}

.home .account-transactions .info-box ul {
  text-align: left;
  list-style: none;
}

.home .account-transactions .info-box > button {
  border-radius: 50px;
  padding: 8px 20px;
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
