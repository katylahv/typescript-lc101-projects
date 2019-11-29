import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [];
    astronauts: Astronaut [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name; 
        this.totalCapacityKg = totalCapacityKg; 
    }

    sumMass( items: Payload[] ): number {
        let sumKg = 0;
        for (let i = 0; i < items.length; i++){
            let c = items[i];
            sumKg += c.massKg;
        }
        return sumKg;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
       let  potentialMass = this.currentMassKg() + item.massKg;
        if (potentialMass <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }
    addCargo(cargo: Cargo){
        if (this.canAdd(cargo) == true){
            this.cargoItems.push(cargo);
            return true;
        } else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut){
        if (this.canAdd(astronaut) == true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}