import React, { useEffect, useState } from 'react'
import SortByDate from './filters/SortByDate';

const Invoice = ({ invoice, searchTerm }) => {
    
    useEffect(() => {
        console.log(dpData)
    }, [])

    const [dpData, setDpData] = useState(invoice && invoice.groupedInvoices)

    useEffect(() => {
        let result = [];
        result = invoice && invoice.groupedInvoices.filter((val) =>
            val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setDpData(result)
    }, [searchTerm])

    const renderPurchased = dpData && dpData.map((val) => (
        val.items.map((item, i) => (
            <div key={i} >
                <p>{item.itemname}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>amount: {item.price * item.quantity}</p>
            </div>
        ))
    ))

    const renderGrouped = dpData && dpData.map((val) => (
        <div className='invoice' key={val.id}>
            <p>#{val.id}</p>
            <p>{val.firstName}</p>
            <p>{val.lastName}</p>
            <p>{val.email}</p>
            <p>{val.phone}</p>
            <p>{val.paymentStatus}</p>
            <div>
                {renderPurchased}
                <p>Total: {totalAmount()}</p>
            </div>
            <p>{formatDate(val)}</p>
        </div>
    ))

    function totalAmount() {
        let total = 0;
        dpData && dpData.map((val) => (
            val.items.forEach((item, i) => {
                total += item.price * item.quantity;
            })
        ))
        return total;
    }

    function formatDate(val) {
        return (new Date(val.createdAt).toLocaleDateString())
    }



    return (
        <div>
            <SortByDate dpData={dpData} setDpData={setDpData} />
            <p> {invoice.date}</p>
            <div>
                {dpData.length ? renderGrouped : `No data found for this search term on ${invoice.date}`}
                {/* { renderGrouped } */}
            </div>
        </div>
    )

    
}

export default Invoice