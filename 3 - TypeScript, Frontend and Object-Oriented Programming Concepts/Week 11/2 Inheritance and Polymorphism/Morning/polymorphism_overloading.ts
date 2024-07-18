class MathOperation {
    add(a: number, b: number): number;
    add(a: string, b: string): string; // overloading function add with new parametres
    add(a: boolean): boolean;
    //implemintation:
    add(a: any, b?: any): any {
        if (b) {
            return a + b;
        }
        return a + b;
    }
}

const mathObj = new MathOperation();

mathObj.add("hello", "world");
mathObj.add(1, 2);
mathObj.add(true);
//same function, diffrent behavior(implemntation) => polimorphism
