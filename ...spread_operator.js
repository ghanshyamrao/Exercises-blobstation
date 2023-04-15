// SPREAD OPERATOR

const user = ['tom','holland','perry','jection','northon']
const userid= ['ew#1','e2@w','ew%2']
const grabInOne = ['rao','shyam',...user,...userid]

//SPREAD ARGS TO FUNCTION

const multiplier=(multiplierBy,...args)=>{
    return args.map((value)=>{
        return multiplierBy * value
    })
}


const mutiplyValue = (multiplier(2,1,2,6))


const userAGE = {
    name: '',
    age: null,
  };
  
  const age = userAGE.age ?? 11;
  console.log(age); // Output: 0