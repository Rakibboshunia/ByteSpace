import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-[#0341FF] relative z-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
        <Navbar />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[140px] pb-[80px]">
          <div className="max-w-[700px]">
            <span className="bg-[#CEFF00] text-gray-900 text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">
              Get in Touch
            </span>
            <h1 className="text-white text-[38px] md:text-[52px] font-extrabold leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              Have questions, feedback, or need assistance? Our team is here to help you succeed on your journey.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative z-10 -mt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12">
             
             <div className="flex-1">
               <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#0341FF]" placeholder="Your name" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#0341FF]" placeholder="your@email.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                   <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#0341FF]" placeholder="How can we help?"></textarea>
                 </div>
                 <button className="bg-[#CEFF00] text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-[#b8e600] transition-colors shadow-sm">
                   Send Message
                 </button>
               </form>
             </div>

             <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-100">
               <h2 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Support</h3>
                   <p className="text-gray-900 font-medium text-lg">support@bytespace.com</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Business Inquiries</h3>
                   <p className="text-gray-900 font-medium text-lg">partners@bytespace.com</p>
                 </div>
                 <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Office Location</h3>
                   <p className="text-gray-900 font-medium">
                     123 Tech Avenue, Suite 400<br/>
                     San Francisco, CA 94107
                   </p>
                 </div>
               </div>
             </div>
             
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
