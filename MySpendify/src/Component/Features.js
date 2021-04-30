import React from 'react'

export default function Features() {
    return (
        <div>
            <div className="features-bg features">
                <div class="team-boxed">
                    <div class="container">
                        <div class="intro">
                            <h2 class="text-center sub-header-font">Features </h2>
                        </div>
                        <div class="rows people text-white">
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box green"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Personal Finance Manager</h4>
                                    <small className="card-text paragrah-font">Your Everyday Finance Manager Tool For All Your Daily Transactions And Personal Budgets.</small>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box purple"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Expense & Income Tracker</h4>
                                    <small className="card-text paragrah-font">Easily Get Your Expenses Tracked On The Go And Be In Charge Of Your Income & Expense.</small>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box violet"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Expense Reminder</h4>
                                    <small className="card-text paragrah-font">Let Us Remind You Of Your Subscription, Loan Payment, Debtors And Other Necessary Expenses</small>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box purple"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Expense Sharing</h4>
                                    <small className="card-text paragrah-font">Share Expenses Among Families, Friends, Colleagues And Others.</small>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box violet"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Performance Status</h4>
                                    <small className="card-text paragrah-font">Daily, Weekly, Monthly And Yearly Performance Status.</small>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 item">
                                <div class="box green"><img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                                    <h4 class="name sub-header-font">Financial Map</h4>
                                    <small className="card-text paragrah-font">Easily Locate Atms/Banks/Financial Institutions Closer To You With Myspendify Map.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            <div className="bottom-features">
                <div className="container">
                    <div className="rows shapes">
                        <div className="card1">
                            <div className="card-body">
                            <img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                            <h5 className="card-title sub-header-font">Best-In-className Partners</h5>
                                <small className="card-text paragrah-font">We Partner With Industry-Leading Security And Privacy Partners.</small>
                            </div>
                        </div>
                        <div className="card2">
                            <div className="card-body pl-5">
                            <img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                            <h5 className="card-title sub-header-font pl-5">You’re In Control</h5>
                                <small className="card-text paragrah-font pl-5">We Will Never Sell Your </small>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="card-body">
                            <img class="rounded-circle" src={process.env.PUBLIC_URL + '/img/Group1.png'} />
                            <h5 className="card-title s sub-header-font">You’re Secured</h5>
                                <small className="card-text paragrah-font">All Data Is Stored And Transmitted With Bank-Level Encryption.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
