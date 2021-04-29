import React from 'react'

export default function Features() {
    return (
        <div>
            <div className="features-bg pb-5">
                <h3 className="text-center pt-5 sub-header-font">Features</h3>
                <div className="features text-white">
                    <div className="cards green ">
                        <img className="card-img-top" src="..." alt=" image cap" />
                        <i className="fas fa-shopping-bag  pl-5"></i>

                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Personal Finance <br /> Manager</h5>
                            <small className="card-text paragrah-font">Your Everyday Finance Manager Tool For All Your Daily Transactions And Personal Budgets.</small>
                        </div>
                    </div>
                    <div className="cards purple">
                        <img className="card-img-top" src="..." alt=" image cap" />
                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Expense & Income <br /> Tracker</h5>
                            <small className="card-text paragrah-font">Easily Get Your Expenses Tracked On The Go And Be In Charge Of Your Income & Expense.</small>
                        </div>
                    </div>
                    <div className="cards violet pt-5">
        
                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Expense Reminder</h5>
                            <small className="card-text paragrah-font">Let Us Remind You Of Your Subscription, Loan Payment, Debtors And Other Necessary Expenses.</small>
                        </div>
                    </div>
                </div>
                <div className="features text-white">
                    <div className="cards purple">
                        
                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Expense Sharing</h5>
                            <small className="card-text paragrah-font">Share Expenses Among Families, Friends, Colleagues And Others.</small>
                        </div>
                    </div>
                    <div className="cards violet">
                        <img className="card-img-top" src="..." alt=" image cap" />
                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Performance Status</h5>
                            <small className="card-text paragrah-font">Daily, Weekly, Monthly And Yearly Performance Status.</small>
                        </div>
                    </div>
                    <div className="cards green">
                        <img className="card-img-top" src="..." alt=" image cap" />
                        <div className="card-body">
                            <h5 className="card-title sub-header-font">Financial Map</h5>
                            <small className="card-text paragrah-font">Easily Locate Atms/Banks/Financial Institutions Closer To You With Myspendify Map.</small>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bottom-features">
                <div className="card1">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                        <h5 className="card-title sub-header-font">Best-In-className Partners</h5>
                        <small className="card-text paragrah-font">We Partner With Industry-Leading Security And Privacy Partners.</small>
                    </div>
                </div>
                <div className="card2">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <i className="fas fa-shopping-bag  pl-5"></i>
                    <div className="card-body pl-5">
                        <h5 className="card-title sub-header-font pl-5">You’re In Control</h5>
                        <small className="card-text paragrah-font pl-5">We Will Never Sell Your </small>
                    </div>
                </div>
                <div className="card3">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                        <h5 className="card-title sub-header-font">You’re Secured</h5>
                        <small className="card-text paragrah-font">All Data Is Stored And Transmitted With Bank-Level Encryption.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
