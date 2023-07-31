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
      if (this.selectedService && !this.selectedStatus) {
        return this.dogdata.filter(el => {
          let services = el.services;
          return services?.includes(this.selectedService)
        })
        
      } else if (this.selectedStatus && !this.selectedService) {
        return this.dogdata.filter(el => {
          let status = el.boardingStatus;
          return status?.includes(this.selectedStatus)
        })
      }
      return this.dogdata
    },
    boardingFilterOptions() {
      return ["Boarding", "Checked-In", "Not Checked-In"]
    }
  },

  components: {
    AppDogInfo,
    AppSharedSelect 
  },

  data() {
    return {
      selectedService: "",
      selectedStatus: "",
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 3rem;
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
  justify-content: center;
  margin-top: 1rem;
}
</style>
