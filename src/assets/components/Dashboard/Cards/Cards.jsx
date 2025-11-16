import React from 'react'
import { mockData } from '../../../MockData/MockData.jsx';

import Card1 from "./icons/total-lead.svg?react";
import Active from "./icons/active.svg?react";
import Close from "./icons/close.svg?react";
import Converted from "./icons/conversion-rate.svg?react";



export default function Cards() {

    const TotalLeads = Object.keys(mockData).length;
    

    // checking active or closed leads
    let ActiveLeads = 0;
    let ClosedLeads = 0;

    mockData.forEach( (deal)=> {
        if(deal.dealStatus == 'active') ActiveLeads++;
        else ClosedLeads++;
    } )


    const ConversionRate = (ClosedLeads/TotalLeads)*100;
    



    return (
        <>
            <div className="bg-[#21222D] text-white w-full h-full md:w-7/10 mt-4 flex flex-col gap-6 rounded-2xl p-4 overflow-hidden ">
                <h1 className='font-semibold text-3xl m-4'>Leads Summary</h1>

                {/* items container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                    {/* individual items */}
                    <div className="flex justify-around item-center w-full  gap-2 md:w-[12em] rounded-xl bg-[#171821] text-white">
                        <div className="w-[9em] m-5 flex md:flex-col ">
                            <div className='mb-4 mr-4 flex items-center'>
                                <Card1 />
                            </div>

                            <div>
                                <h1 className='text-xl md:text-2xl font-semibold'>{TotalLeads}</h1>
                                <h2 >Total Leads</h2>
                                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-around item-center w-full md:w-[12em] rounded-xl bg-[#171821] text-white">

                        <div className="w-[9em] m-5  flex   md:flex-col" >
                            <div className='mb-4 mr-4 flex items-center'>
                                <Active />
                            </div>

                            <div>
                                <h1 className='text-2xl font-semibold'>{ActiveLeads}</h1>
                                <h2 >Active Leads</h2>
                                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-around item-center w-full  md:w-[12em] rounded-xl bg-[#171821] text-white">
                        <div className="w-[9em] m-5 flex md:flex-col">
                            <div className='mb-4 mr-4 flex items-center'>
                                <Close />
                            </div>
                            <div>

                                <h1 className='text-2xl font-semibold'>{ClosedLeads}</h1>
                                <h2 >Closed Leads</h2>
                                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-around item-center w-full  md:w-[12em] rounded-xl bg-[#171821] text-white">
                        <div className="w-[9em] m-5 flex md:flex-col">
                            <div className='mb-4 mr-4 flex items-center'>
                                <Converted />
                            </div>

                            <div>

                                {/* rounding off the value */}
                                <h1 className='text-2xl font-semibold'>{ConversionRate.toFixed(1)} %</h1> 
                                <h2 >Conversion Rate</h2>
                                <h4 className="text-[#FEB95A] text-xs">+10% from Yesterday</h4>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </>
    )
}
