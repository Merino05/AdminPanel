import jmoment from "jalali-moment";
export const dateConverter=(date)=>{
    return jmoment(date).format("jYYYY/jMM/jDD")
}