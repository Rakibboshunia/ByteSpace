import React from 'react';

const brands = [
  {
    name: 'Notion', color: '#000000', bg: '#F5F5F0',
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933z" /></svg>),
  },
  {
    name: 'Figma', color: '#F24E1E', bg: '#FFF2EE',
    icon: (<svg width="12" height="18" viewBox="0 0 24 32" fill="currentColor"><path d="M8 32c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-12H4c-2.208 0-4-1.792-4-4s1.792-4 4-4h4v8zm0-12H4C1.792 8 0 6.208 0 4 0 1.792 1.792 0 4 0h4v8zm4-8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zm4 12c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" /></svg>),
  },
  {
    name: 'Slack', color: '#4A154B', bg: '#F9F0FA',
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>),
  },
  {
    name: 'Stripe', color: '#635BFF', bg: '#F0EFFF',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.518-1.009 1.390-1.009 1.648 0 3.336.700 4.507 1.285l.663-4.129c-.967-.489-2.911-1.213-5.370-1.213-1.800 0-3.308.484-4.397 1.380-1.130.930-1.716 2.275-1.716 3.85 0 2.883 1.756 4.173 4.597 5.164 1.868.665 2.488 1.166 2.488 1.916 0 .740-.664 1.152-1.772 1.152-1.617 0-3.856-.868-5.088-1.772l-.691 4.157c1.207.800 3.415 1.582 5.728 1.582 1.892 0 3.476-.45 4.576-1.328 1.187-.95 1.820-2.384 1.820-4.099.004-2.98-1.790-4.302-4.423-5.333z" /></svg>),
  },
  {
    name: 'Webflow', color: '#146EF5', bg: '#EBF3FF',
    icon: (<svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor"><path d="M17.777 0s-2.537 7.787-2.701 8.312C14.902 7.028 13.832 0 13.832 0H9.626S7.07 7.787 6.905 8.312C6.74 7.028 5.645 0 5.645 0H0l3.388 16h4.47l2.537-7.498L12.933 16h4.47L20.979 0h-3.202z" /></svg>),
  },
  {
    name: 'Linear', color: '#5E6AD2', bg: '#EEEFFE',
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.226 14.876C3.105 15.404 3.427 15.93 3.955 16.05l13.999 3.286a1.25 1.25 0 10.57-2.432L4.525 13.618a1.25 1.25 0 00-1.299 1.258zM3.226 9.876C3.105 10.404 3.427 10.93 3.955 11.05l13.999 3.286a1.25 1.25 0 10.57-2.432L4.525 8.618a1.25 1.25 0 00-1.299 1.258zM3.226 4.876C3.105 5.404 3.427 5.93 3.955 6.05l13.999 3.286a1.25 1.25 0 10.57-2.432L4.525 3.618a1.25 1.25 0 00-1.299 1.258z" /></svg>),
  },
  {
    name: 'Loom', color: '#625DF5', bg: '#EEEFFE',
    icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.4 10.894h-7.733l6.7-3.867-1.2-2.08-6.7 3.867 3.867-6.7-2.08-1.2-3.867 6.7V0h-2.4v7.614L7.12.914l-2.08 1.2 3.867 6.7-6.7-3.867-1.2 2.08 6.7 3.867H.6v2.4h7.307l-6.7 3.866 1.2 2.08 6.7-3.866-3.867 6.7 2.08 1.2L11.187 16v7.4h2.4V16l3.867 6.7 2.08-1.2-3.867-6.7 6.7 3.867 1.2-2.08-6.7-3.867H23.4z" /></svg>),
  },
  {
    name: 'Framer', color: '#0055FF', bg: '#E6EEFF',
    icon: (<svg width="13" height="18" viewBox="0 0 14 21" fill="currentColor"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" /></svg>),
  },
];

// Duplicate for seamless infinite loop
const allBrands = [...brands, ...brands];

const Sponsors = () => {
  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <p className="text-center text-[12px] font-semibold text-gray-400 uppercase tracking-[0.18em] mb-8">
        Trusted by teams at world-class companies
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }} />

        {/* Scrolling track */}
        <div className="animate-marquee">
          {allBrands.map((brand, i) => (
            <div key={i} className="flex items-center mx-2 sm:mx-4 shrink-0 cursor-default select-none group">
              <div
                className="flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] md:text-[15px] tracking-tight whitespace-nowrap transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                style={{ color: brand.color, backgroundColor: brand.bg }}
              >
                <span style={{ color: brand.color }}>{brand.icon}</span>
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
