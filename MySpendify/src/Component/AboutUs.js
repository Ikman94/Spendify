import React from 'react'

export default function AboutUs() {
    return (
        <div className="rows">
            <div className="col-lg-7">
                {/* <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <a to="#" className="btn btn-primary"></a>
                    </div>
                </div> */}
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-right pt-5 pb-5 sub-header-font">About us</h3>
                        <p className="card-text spendifyParagraph font-weight-bold link
              ">Myspendify serves as smart personal finance mobile application built to enable users to Plan, monitor & make informed decisions on their personal finances.
                            It is an innovative financial technology application that allows users to know with precision where they spend their money, thereby making users adjust to their
              budget, spending patterns and savings on the go.</p>
                        <a to="#" className="btn explore text-white float-right sub-header-font">Explore</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
