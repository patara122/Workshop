import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set,get) => ({

    personnel: [],
    locations: [],
    assignments: [],
    selectedLocationId:null,

    fetchAll : async ()=>{
        try{
            const personnel = await api.get('/personnel');
            const locations = await api.get('/locations');
            
            set({
                personnel: personnel,
                locations: locations,   
              
            });
        }catch(error){

            console.log(error);
        }
        
    },

})

const useDutyStore = create(dutyStore);

export default useDutyStore;