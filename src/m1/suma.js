export const suma = (...args)=>{
    return args.reduce((last,curr)=>{
        return last + curr;
    },0);
};

