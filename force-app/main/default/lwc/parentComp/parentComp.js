import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    isclick=false
    msg=''
    starthandle(){
        this.isclick=true
    }
    closehandler(event){
        this.isclick=false
        this.msg=event.detail
    }
   
}