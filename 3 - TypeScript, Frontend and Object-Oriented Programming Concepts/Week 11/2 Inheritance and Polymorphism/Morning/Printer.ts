class Printer {
    value: string;
    private _privateValue: number;
    protected _protectedValue: number; //TODO
    constructor(val: string) {
        this.value = val;
        this._privateValue = 20;
        this._protectedValue = 100;
    }
    doPrint() {
        console.log("Do print from Parent");
    }
}

class ChildPrinter extends Printer {

    doSomthing = () => {
        console.log("somthing");
    }
    doPrint() {
        //this overides the doPrint in parent
        super.doPrint(); //Do not use arrow function here Printer.doPrint() from parent
        console.log('Protected value from parent', this._protectedValue); //from parent
        console.log("Do print from Child");
    }
}

const newObjChild = new ChildPrinter("abc");
newObjChild.doSomthing();

newObjChild.doPrint(); //child doParent will overide parents

const newObjPArent = new Printer("asdasd"); //parent class
