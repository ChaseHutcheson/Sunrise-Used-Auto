import React from 'react'

const Googleimbed = () => (
    <div class="pt-10 pr-14 pb-0 pl-14 ml-28">
            <div class="float-left rounded-2xl bg-blue-50 h-96 w-96 items-center">
                <div class="text-4xl text-center pt-10 pr-3 pl-3 pb-0.5 font-semibold mt-6">
                    Canfield
                </div>
                <div class="text-center text-2xl pb-6 pt-2 text-gray-600 font-semibold">
                    7300 N Palmyra Rd, Canfield, OH 44406
                </div>
                <div class="text-4xl text-center pt-3 pr-3 pl-3 pb-0.5 fw font-semibold">
                    Hours of Operation
                </div>
                <div class="text-center text-2xl pt-2 text-gray-600 font-semibold">
                    Monday - Sunday: 10am-8pm
                </div>
            </div>
            <div class="google-imbed">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7074021796047!2d-80.7892908236609!3d41.0316569713472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833fd0bd908bef3%3A0xaadd9ce6f82cdb62!2sMahoning%20County%20Career%20%26%20Technical%20Center!5e0!3m2!1sen!2sus!4v1670807330536!5m2!1sen!2sus" width="600" height="384" style={{ border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
  )


export default Googleimbed
