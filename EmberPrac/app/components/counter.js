import Compoonent from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object';

export default class CounterComponent extends Compoonent{
    @tracked count=0;
    @tracked mult = 1;

    /*@action 
    increment(){
        this.count = this.count + 1;
    }

    @action
    decrement(){
        this.count = this.count - 1;
    }*/

    @action
    change(amount){
        this.count = this.count + amount;
    }

    @action
    reset(){
        this.count = 0;
    }

    @action 
    double(){
        this.mult = this.mult * 2;
    }

    get total(){
        return this.count + this.mult;
    }
}