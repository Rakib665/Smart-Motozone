import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faListCheck, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <div className='mt-3 mb-5'>
                <h2 className='font-bold text-primary text-4xl text-center'>MILLION BUSINESS TRUST US</h2>
                <p className='text-2xl text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            </div>

            <div className='flex sm:flex-col-1 justify-between p-8'>
                {/* <div>
                    <FontAwesomeIcon  className='h-12 w-12' icon={faFlag} />
                    <p className='text-4xl text-primary font-bold'>100</p>
                    <p>Countries</p>
                    
                </div> */}
                <div>
                    <FontAwesomeIcon  className='h-12 w-12 text-center ml-5 ' icon={faListCheck} />
                    <p className='text-3xl text-gray-500 font-bold text-center'>200</p>
                    <p>Happy Clients</p>
                    
                </div>
                <div>
                    <FontAwesomeIcon  className='h-12 w-12 text-center ml-5' icon={faFlag} />
                    <p className='text-4xl text-gray-500 text-center font-bold'>500+</p>
                    <p >Complete service</p>
                    
                </div>
                <div>
                    <FontAwesomeIcon  className='h-12 w-12 p-2 ml-6' icon={faThumbsUp} />
                    <p className='text-4xl font-bold text-gray-500 text-center'>500+</p>
                    <p>Complete service</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;