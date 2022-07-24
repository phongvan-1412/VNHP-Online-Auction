import React from 'react'
import { AddBill } from './AddBill'

const Bill = () => {
  return (
    <div className='container'>
        <div className='float-right mb-3'>
            <button 
                className='btn btn-success'
                data-toggle="modal" 
                data-target="#con-close-modal"
            >
            Add new
            </button>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Payment code</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
        <AddBill/>
    </div>

  )
}

export default Bill 