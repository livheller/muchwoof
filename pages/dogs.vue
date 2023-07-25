<template>
  <main class="container">
    <div class="dogheading">
      <h1>The Doggos</h1>
      <hr />
      <section class="filtersContainer">
        <AppSharedSelect @change="selectedService = $event" />
        <AppSharedSelect @change="selectedStatus = $event" select="Status" :selectOptions="boardingFilterOptions" />
      </section>
    </div>
    <AppDogInfo :datasource="filteredDogs" />
  </main>
</template>

<script>
import AppDogInfo from "@/components/AppDogInfo.vue";
import AppSharedSelect from '@/components/AppSharedSelect.vue';
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["dogdata"]),
    filteredDogs() {
      if (this.selectedService) {
        return this.dogdata.filter(el => {
          let services = el.services;
          return services.includes(this.selectedService)
            })
        
      }
      return this.dogdata
    },
    boardingFilterOptions() {
      return ["Boarding", "Daycare", "Not Checked-In"]
    }
  },

  components: {
    AppDogInfo,
    AppSharedSelect 
  },

  data() {
    return {
      selectedService: "",
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  padding-top: 3rem;
}
hr {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  opacity: .5;
}
.filtersContainer {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
