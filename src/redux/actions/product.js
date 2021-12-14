import { fetchProduct } from "../../api/product";

export const getProducts =()=>{
    return async (dispatch) =>{
      //  const products=await fetchProduct();
     
    const products= [
        { _id: '1', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '2', title: "tee", price: 10, description: 'yyggujhfgggggggg gfgfgfgfgf fgggggg jnjttttgyyrrrrrr ggggggggg0 gfrfrfrfrfrfrfrfrfr1 fgggggg yuguhyg yugyh ' },
        { _id: '3', title: "milke", price: 5, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '4', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '5', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '6', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '7', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '8', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '9', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
        { _id: '10', title: "coffee", price: 20, description: 'yyggujhgyyg yuguhyg yugyh ' },
    ]
        await dispatch ({type:'INIT',payload:products});
    }
}