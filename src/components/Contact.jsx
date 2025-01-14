import React, { useState } from 'react'
import Section from './Section'
import { copy, tick } from '../assets';

const Contact = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('nachobakalov@gmail.com');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }


  return (
    <Section id="contact">
        <div className='contact-container flex justify-center content-center align-center'>
          
            <div className="flex justify-center  flex-col z-1 max-w-[30rem]  content-center bg-slate-800 rounded-md px-10 py-3 bg-opacity-70">
              <h4 className="h4 mb-4">Свържи се с нас</h4>
              <div className="space-y-5">
                    <div className="flex gap-3 cursor-pointer" onClick={handleCopy}>
                        <img src={hasCopied ? tick : copy} alt="copy" />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">okadastar@gmail.com</p>
                    </div>
                    <div className="flex gap-3 cursor-pointer" >
                            <a className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white" href="tel:0886512695" > 0886512695</a>
                    </div>
                    </div>
            </div>

        </div>
    </Section>
  )
}

export default Contact