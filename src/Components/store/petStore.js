import { makeAutoObservable } from "mobx";
import data from "../../petsData";

class petStore {
  pets = data;
  constructor() {
    makeAutoObservable(this);
  }
  handleAdopt(petId) {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  }
}

const store = new petStore();

export default store;
