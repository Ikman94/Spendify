import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function AboutUs() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div className="rows">
            <div className="col-lg-7">
                <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0">
                    <div className="card-body">
                        <h3 className="text-right pt-5 pb-5 sub-header-font">About us</h3>
                        <p className="card-text spendifyParagraph font-weight-bold blue">
                            Myspendify serves as smart personal finance mobile application built to enable users to Plan, monitor & make informed decisions on their personal finances.
                            It is an innovative financial technology application that allows users to know with precision where they spend their money, thereby making users adjust to their
                             budget, spending patterns and savings on the go.</p>
                        <div className=" text-white float-right sub-header-font">
                            <Button onClick={() => setLgShow(true)} className="spendify-btn">Explore</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">

                <Modal.Body>
                        <div class="container">
                            <div class="rows">
                                <div>
                                    <h3 className="text-center p-4 sub-header-font">About us</h3>
                                    <p className="card-text spendifyParagraph font-weight-bold blue p-5">
                                        MySpendify serves as smart personal finance mobile application built to enable users to track, monitor & make informed decisions on their personal finance. It is an innovative financial technology application that allows users to know with precision where they spend their money, thereby
                                        making users adjust to their spending patterns and savings on the go. A free app with the uniqueness of simplicity, flexibility, expense automated, expense sharing multi-currency, cloud sync, and backup. We aim at improving
                                        our users spending pattern, allowing themto take control of their financial state while promoting financial inclusion and literacy.
                                        Our desire is to bridge the gap of financial literacy and inclusion beyond Africa while monitoring and growing your money. We believe that the step to financial freedom starts from knowing and track what you spend with the help MySpendify App.
                               </p>
                                </div>
                            </div>
                        </div>

                </Modal.Body>
            </Modal>

        </div>
    )
}
