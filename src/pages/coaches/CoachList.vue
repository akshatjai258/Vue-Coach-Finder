<template>
<coach-filter @change-filter="setFilters"></coach-filter>

<base-card>
  <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
  </div>
  <section>
      
      <ul v-if="hasCoaches">
         <coach-item
         v-for="coach in filteredCoaches"
         :key="coach.id"
         :id="coach.id"
         :first-name="coach.firstName"
         :last-name="coach.lastName"
         :rate="coach.hourlyRate"
         :areas="coach.areas"
         ></coach-item>
      </ul>
      <h3 v-else>No coaches Found</h3>
  </section>
      </base-card>
</template>


<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'
export default {
    computed:{
        filteredCoaches(){
            const coaches= this.$store.getters['coaches/coaches'];
            return coaches.filter(coach=>{
                if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilters.backend && coach.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilters.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            })
        
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];

        }
    },
    data(){
        return{
            activeFilters:{
                frontend:true,
                backend:true,
                career:true,

            }
        }
    },
    components:{
        CoachItem,
        CoachFilter
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilters=updatedFilters;
        }

    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
