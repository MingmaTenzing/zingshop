
import { product } from "@/pages";
import Product from "./Product";


function BudgetProducts({ items }: { items: product[] }) {

    const budgetitems = items.filter(item => item.price <= 50).slice(0,8)
    console.log(budgetitems)
  return (
    <div className="mt-10 p-4">

<h1 className=" md:text-3xl underline underline-offset-8 decoration-zingyellow text-gray-800 font-bold text-xl text-center ">
       Best Budget Products under $50
      </h1>   
      
      <div className="mt-10 flex justify-center flex-wrap ">
        {
            budgetitems.map((item) =>
           (<div className="m-4">
                <Product item={item} key={item.id} />
                </div> ))
            
        }
      </div>
       </div>
  )
}
export default BudgetProducts