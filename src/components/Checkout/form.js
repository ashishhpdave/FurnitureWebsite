import React from 'react'
import BillingFrom from './billing'
import domain from '../Checkout/billing'

const CheckoutForm = () => {
    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="border p-4 rounded" role="alert">
                            Returning customer? <a href="#">Click here</a> to login
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h2 className="h3 mb-3 text-black">Billing Details</h2>
                        <div className="p-3 p-lg-5 border bg-white">
                           
                           <BillingFrom />

                            <div className="form-group">
                                <label for="c_create_account" className="text-black" data-bs-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account">
                                    <input type="checkbox" value="1" id="c_create_account" /> Create an account?</label>
                                <div className="collapse" id="create_an_account">
                                    <div className="py-2 mb-4">
                                        <p className="mb-3">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                        <div className="form-group">
                                            <label for="c_account_password" className="text-black">Account Password</label>
                                            <input type="email" className="form-control" id="c_account_password" name="c_account_password" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label for="c_ship_different_address" className="text-black" data-bs-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address">
                                    <input type="checkbox" value="1" id="c_ship_different_address" /> Ship To A Different Address?</label>
                                <div className="collapse" id="ship_different_address">
                                   

                                </div>
                            </div>

                          

                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                                <div className="p-3 p-lg-5 border bg-white">

                                    <label for="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                                    <div className="input-group w-75 couponcode-wrap">
                                        <input type="text" className="form-control me-2" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-black btn-sm" type="button" id="button-addon2">Apply</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Your Order</h2>
                                <div className="p-3 p-lg-5 border bg-white">
                                    <table className="table site-block-order-table mb-5">
                                        <thead>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                                <td>$250.00</td>
                                            </tr>
                                            <tr>
                                                <td>Polo Shirt <strong className="mx-2">x</strong>   1</td>
                                                <td>$100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                <td className="text-black">$350.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="border p-3 mb-3">
                                        <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

                                        <div className="collapse" id="collapsebank">
                                            <div className="py-2">
                                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border p-3 mb-3">
                                        <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

                                        <div className="collapse" id="collapsecheque">
                                            <div className="py-2">
                                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border p-3 mb-5">
                                        <h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

                                        <div className="collapse" id="collapsepaypal">
                                            <div className="py-2">
                                                <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                    </div>

                                 

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- </form> --> */}
            </div>
        </div >
    )
}

export default CheckoutForm
