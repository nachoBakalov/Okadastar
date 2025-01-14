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
                    <div>
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                        Адрес: 
                        <a 
                        href="https://www.google.com/maps/place/%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BD+%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%8A%D1%80+%D0%95%D0%9E%D0%9E%D0%94/@42.509276,27.466885,17z/data=!3m1!4b1!4m6!3m5!1s0x40a695e0f1e65153:0x79f7a025e1d9aa7b!8m2!3d42.509276!4d27.466885!16s%2Fg%2F11v9yj28_t?hl=bg&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                          &nbsp; гр.Бургас ж.к. Братя Миладинови, бул. „Стефан Стамболов“ 120, етаж 2, стая 207
                        </a>
                    </p>
                    </div>
                </div>
            </div>

        </div>
    </Section>
  )
}

export default Contact