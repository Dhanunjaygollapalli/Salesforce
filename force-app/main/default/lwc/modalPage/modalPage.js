import { LightningElement } from 'lwc';

export default class ModalPage extends LightningElement {
    changehandler(){
        const myevent= new CustomEvent('close', {detail:"My new page"})
        this.dispatchEvent(myevent)
    }
}