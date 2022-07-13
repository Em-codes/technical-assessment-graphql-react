import React, { useEffect, useState } from 'react'
import SortByDate from './filters/SortByDate';

const Invoice = ({ invoice, searchTerm }) => {
    const [filteredData, setFilteredData] = useState(invoice && invoice.groupedInvoices)
    const [activeIndex, setActiveIndex] = useState()


    useEffect(() => {
        let result = [];
        result = invoice && invoice.groupedInvoices.filter((val) =>
            val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
        )

        setFilteredData(prev => result)
    }, [searchTerm])


    console.log('s', invoice.groupedInvoices)

    const renderPurchased = filteredData && filteredData.map((val) => (
        val.items.map((item, i) => (

            <tr tr key={i} >
                <td>{item.itemname}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>${item.price * item.quantity}</td>
            </tr >

        ))
    ))

    const renderGrouped = filteredData.map((val, i) => (
        <div className='single-invoice' key={val.id}>
            <p className='hash-value'>#{val.id}</p>
            <p>{formatDate(val)}</p>
            <p>{val.firstName}</p>
            <p>{val.lastName}</p>
            <p className='total-amount'>${totalAmount()}</p>
            <p className={`payment-status ${(val.paymentStatus === "paid") ? "paid-class" : (val.paymentStatus === "pending") ? "pending-class" : (val.paymentStatus === "unpaid") ? "unpaid-class" : null}`}>
                <span></span>
                {val.paymentStatus}
            </p>
            <div onClick={() => activeIndex === i ? setActiveIndex('') : setActiveIndex(i)}>
                <div className="three col">
                    <div className={`${activeIndex === i ? 'hamburger is-active' : 'hamburger'}`} id="hamburger-12">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
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
                            {renderPurchased}
                        </table>
                        <div className='table-footer'>
                            <h1>Total Amount:</h1> <h1>${totalAmount()}</h1>
                        </div>
                    </div>

                </div>
            }
        </div>
    ))

    function totalAmount() {
        let total = 0;
        filteredData && filteredData.map((xy) => (
            xy.items.forEach((item, i) => {
                total += item.price * item.quantity;
            })
        ))
        return total;
    }

    function formatDate(val) {
        return (new Date(val.createdAt).toLocaleDateString())
    }



    return (
        <div className='single-dataset'>
            <p className='date'> {invoice.date}</p>
            <div>
                {filteredData.length ? renderGrouped : `No data found for this search term on ${invoice.date}`}
            </div>
        </div>
    )
}

export default Invoice