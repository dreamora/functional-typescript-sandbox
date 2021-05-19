type operation = {
    fn : (...args : any[]) => any;
    flatten : boolean;
    flatLevel : number;
}

type numberCollection<T> = T | T[];

const mapForCollection = <R,T>(values: Array<numberCollection<T>>, op: operation) : R => {
    if(op === null) throw new Error("no operation provided");
    if(op.fn === null) throw new Error("No map function provided");

    if(op.flatten) return op.fn(values.flat(op.flatLevel));
    else return op.fn(values);
};
export {mapForCollection}
export type {operation, numberCollection}

