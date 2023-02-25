import { LightningElement, api } from 'lwc';

export default class ProgressComp extends LightningElement {
    @api per
    changehandler(event){
        this.per=event.target.value
     }

    @api resethandler(){
        return this.per=50
    }
}