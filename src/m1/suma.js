/**
 * add all args as numbers
 * @param  {...any} args numbers
 * @returns number
 */
export const suma = (...args)=>{
    return args.reduce((last,curr)=>{
        return last + curr;
    },0);
};

