import React from 'react'

const Googleimbed = () => (
    <div className="flex flex-col items-center pt-10 pr-14 pb-0 pl-14 mt-24">
            <div className="float-left rounded-lg bg-blue-50 h-64 w-4/5 items-center mb-5">
                <div className="text-4xl text-center pr-3 pl-3 font-semibold mt-6">
                    Canfield
                </div>
                <div className="text-center text-2xl pb-2 pt-2 text-gray-600 font-semibold">
                    7300 N Palmyra Rd, Canfield, OH 44406
                </div>
                <div className="text-4xl text-center pt-10 pr-3 pl-3 pb-0.5 fw font-semibold">
                    Hours of Operation
                </div>
                <div className="text-center text-2xl pt-2 text-gray-600 font-semibold">
                    Monday - Sunday: 10am-8pm
                </div>
            </div>
            <div className="google-imbed">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7074021796047!2d-80.7892908236609!3d41.0316569713472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833fd0bd908bef3%3A0xaadd9ce6f82cdb62!2sMahoning%20County%20Career%20%26%20Technical%20Center!5e0!3m2!1sen!2sus!4v1670807330536!5m2!1sen!2sus" width="650" height="384" style={{ border:'0' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  )


export default Googleimbed
