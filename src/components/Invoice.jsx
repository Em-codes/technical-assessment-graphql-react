import React, { useEffect, useState } from 'react'
import ToggleBtn from './ToggleBtn';

const Invoice = ({ invoice, searchTerm, allData, setFilteredData }) => {
  const [el, setEl] = useState('')
  const [activeIndex, setActiveIndex] = useState()
  const subData = invoice && invoice.groupedInvoices

  useEffect(() => {
   
    const p2 = allData.map((val) => (val.groupedInvoices))
    setEl(...p2)

    let result = [];
    result = el && el.filter((val) =>
      val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
    )

    let arr = [];
    const obj = { date: invoice.date, groupedInvoices: result }
    searchTerm !== "" ?  setFilteredData([...arr, obj]) : setFilteredData(allData)

  }, [searchTerm])



  const renderGrouped = subData.map((val, i) => (
    <div className='single-invoice' key={val.id}>
      <p className='hash-value'>#{val.id}</p>
      <p>{formatDate(val)}</p>
      <p>{val.firstName}</p>
      <p>{val.lastName}</p>
      <p className='total-amount'>${totalAmount(val)}</p>
      <p className={`payment-status ${(val.paymentStatus === "paid") ? "paid-class" : (val.paymentStatus === "pending") ? "pending-class" : (val.paymentStatus === "unpaid") ? "unpaid-class" : null}`}>
        <span></span>
        {val.paymentStatus}
      </p>
      <div onClick={() => activeIndex === i ? setActiveIndex('') : setActiveIndex(i)}>
        <ToggleBtn activeIndex={activeIndex} i={i} />
      </div>

      {activeIndex === i &&
        <div className='more-info'>
          <div className='contact-info'>
            <p>{val.email}</p>
            <p>{val.phone}</p>
          </div>
          <div className='purchased-container'>
            <table>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sub-Total</th>
              </tr>
              {val.items.map((item, i) => (
                <tr tr key={i} >
                  <td>{item.itemname}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>${item.price * item.quantity}</td>
                </tr >
              ))}
            </table>
            <div className='table-footer'>
              <h1>Total Amount:</h1> <h1>${totalAmount(val)} </h1>
            </div>
          </div>

        </div>
      }
    </div>
  ))

  function totalAmount(val) {
    let total = val.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total
  }


  function formatDate(val) {
    return (new Date(val.createdAt).toLocaleDateString())
  }
  // function formatTime(val) {
  //   return (new Date(val.createdAt).toLocaleTimeString())
  // }



  return (
    <div className='single-dataset'>
      <p className='date'> {invoice.date}</p>
      <div>
        {
          subData.length ?
            renderGrouped
            : `No data found for this search term on ${invoice.date}`
        }
      </div>
    </div>
  )
}

export default Invoice