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
            
            set({
                personnel: personnel,
              
            });
        }catch(error){

            console.log(error);
        }
        
    },

})

const useDutyStore = create(dutyStore);

export default useDutyStore;