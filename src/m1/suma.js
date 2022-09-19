/**
 * add all args as numbers
 * @param  {...any} args numbers
 * @returns number
 */
const suma = (...args)=>{
    return args.reduce((last,curr)=>{
        return last + curr;
    },0);
};

export default suma;
