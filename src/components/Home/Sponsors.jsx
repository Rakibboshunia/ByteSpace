import React from 'react';

const Sponsors = () => {
  return (
    <div className="w-full bg-[#F8F9FA] py-8 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center opacity-60 grayscale">
        {/* Logo 1 */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3v7.5l6 3 6-3v-7.5l-6 3z" /></svg>
          Logoipsum
        </div>
        {/* Logo 2 */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
          Logoipsum
        </div>
        {/* Logo 3 */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" /></svg>
          Logoipsum
        </div>
        {/* Logo 4 */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
          Logoipsum
        </div>
        {/* Logo 5 */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.5l7 14.5H5l7-14.5z" /></svg>
          Logoipsum
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
