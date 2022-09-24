import React from 'react'
import CartTable from '../components/CartTable'
// import CartTabledata from '../components/CartTableData'

// function data(val){
//     return(
//         <CartTable
//             title={val.title}
//             price={val.price}
//             discount={val.discount}
//             netpay={val.netpay}
//         />
//     )
// }

const Cart = () => {
  return (
    <div>
        {/* {CartTabledata.map(data)}
         */}
         <CartTable />
    </div>
  )
}

export default Cart