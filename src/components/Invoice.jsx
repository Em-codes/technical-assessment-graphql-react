import React, { useEffect, useState } from 'react'
import SortByDate from './filters/SortByDate';

const Invoice = ({ invoice, searchTerm }) => {
    const [filteredData, setFilteredData] = useState(invoice && invoice.groupedInvoices)

    useEffect(() => {
        let result = [];
        result = invoice && invoice.groupedInvoices.filter((val) =>
            val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.createdAt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredData(result)
    }, [searchTerm])

    const renderPurchased = filteredData && filteredData.map((xy) => (
        xy.items.map((item, i) => (
            <div key={i} >
                <p>{item.itemname}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>amount: {item.price * item.quantity}</p>
            </div>
        ))
    ))

    const renderGrouped = filteredData.map((val) => (
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
        <div>
            {/* <SortByDate filteredData={filteredData} setFilteredData={setFilteredData} /> */}
            <p> {invoice.date}</p>
            <div>
                {filteredData.length ? renderGrouped : `No data found for this search term on ${invoice.date}`}
            </div>
        </div>
    )
}

export default Invoice