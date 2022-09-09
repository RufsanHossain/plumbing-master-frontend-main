import React from 'react';
import solution from "../../../../images/solution.png";
import shower from "../../../../images/shower.png";
import pipe from "../../../../images/pipe.png";
import water from "../../../../images/water.png";
import showerHead from "../../../../images/showerHead.png";
import comode from "../../../../images/comode.png";
import pipeFix from "../../../../images/pipeFix.png";
import './Solution.css';

const Solution = () => {
    return (
        <div class="container-fluid bg-light">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 text-center mt-5 mb-5 solutionheading">
                    <h1>Our Solutions</h1>
                </div>
            </div>
            <div class="row">

                    <div class="col-md-4 col-sm-12 mt-5">

                        <div class="our-solution-section">
                             <div class="row justify-content-md-center text-right">
                                <div class="col-9">
                                   <h4 class="text-right">REMAKING BATHROOM ?</h4>
                                </div>
                                <div class="col-3">
                                    <img class="solution-icon" src={shower} alt=""></img>
                                </div>
                                <div class="col-12">
                                     <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                </div>
                             </div>
                        </div>
                        
                        <div class="our-solution-section">
                             <div class="row justify-content-md-center text-right">
                                <div class="col-9">
                                   <h4 class="text-right">PIPELINE FEETING</h4>
                                </div>
                                <div class="col-3">
                                    <img class="solution-icon" src={pipe} alt=""></img>
                                </div>
                                <div class="col-12">
                                     <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                </div>
                             </div>
                        </div>

                        <div class="our-solution-section">
                             <div class="row justify-content-md-center text-right">
                                <div class="col-9">
                                   <h4 class="text-right">LOW WATER PRESSURE?</h4>
                                </div>
                                <div class="col-3">
                                    <img class="solution-icon" src={water} alt=""></img>
                                </div>
                                <div class="col-12">
                                     <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                </div>
                             </div>
                        </div>
                        
                    </div>
                    

                    <div class="col-md-4 col-sm-12 worker-image mt-5">
                        <img src={solution} alt=""></img>
                    </div>



                    <div class="col-md-4 mt-5">

                        <div class="our-solution-section">
                            <div class="row justify-content-md-center text-left">
                                 <div class="col-3">
                                    <img class="solution-icon-left" src={showerHead} alt=""></img>
                                 </div>
                                <div class="col-9">
                                    <h4>CHANGE SHOWERHEAD?</h4>
                                 </div>
                                 <div class="col-12">
                                    <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                 </div>
                            </div>
                        </div>

                        <div class="our-solution-section">
                            <div class="row justify-content-md-center text-left">
                                 <div class="col-3">
                                    <img class="solution-icon-left" src={comode} alt=""></img>
                                 </div>
                                <div class="col-9">
                                    <h4>BROKEN FLUSH?</h4>
                                 </div>
                                 <div class="col-12">
                                    <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                 </div>
                            </div>
                        </div>

                        <div class="our-solution-section">
                            <div class="row justify-content-md-center text-left">
                                 <div class="col-3">
                                    <img class="solution-icon-left" src={pipeFix} alt=""></img>
                                 </div>
                                <div class="col-9">
                                    <h4>PIPELINE FIXING?</h4>
                                 </div>
                                 <div class="col-12">
                                    <p>Quis acclhumsan libero maximus magna. Vivamus lesuada nisi at mauris facilisis, vitae elementum diam efficitur efficitur.</p>
                                 </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
        </div>
        
    );
};

export default Solution;