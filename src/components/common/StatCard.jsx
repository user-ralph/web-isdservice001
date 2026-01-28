import React from 'react';

export default function StatCard({ title, value, icon, variant = 'default' }) {
  
  const isPrimary = variant === 'primary';
  const brandColor = "#005bac"; // Hardcoded Brand Blue

  // 1. Container Styles
  // If primary, we force the background color. If default, it's white.
  const containerStyle = isPrimary 
    ? { backgroundColor: brandColor, color: 'white' } 
    : { backgroundColor: 'white', color: '#374151' }; // #374151 is a standard gray text

  // 2. Value (Number) Styles
  // If primary, text is white. If default, text is Brand Blue.
  const valueStyle = isPrimary 
    ? { color: 'white' } 
    : { color: brandColor }; 

  // 3. Icon Styles
  // We use opacity to give it the watermark look
  const iconStyle = isPrimary 
    ? { color: 'white', opacity: 0.3 } 
    : { color: brandColor, opacity: 0.2 };

  return (
    <div 
      className="card w-full shadow-sm" 
      style={containerStyle} // Applying hardcoded background here
    >
      <div className="card-body flex flex-row items-center justify-between">
        
        {/* Left Side: Data */}
        <div>
          <h2 className={`card-title text-sm font-medium mb-1 ${isPrimary ? 'text-white/80' : 'text-gray-500'}`}>
            {title}
          </h2>
          
          {/* The Big Number */}
          <div className="text-4xl font-bold" style={valueStyle}>
            {value}
          </div>
        </div>

        {/* Right Side: Icon (Watermark style) */}
        <div className="text-6xl" style={iconStyle}>
          {icon}
        </div>

      </div>
    </div>
  );
}