import { create } from "zustand";

const dutyStore = () => ({

    personnel: [],
    kaika: "tam",
    jukkru: () => console.log("Jukkru!!!  ")

})

const useDutyStore = create(dutyStore);