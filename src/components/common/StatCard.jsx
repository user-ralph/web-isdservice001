import React, { useState, useEffect } from 'react';

export default function StatCard({ title, value, icon, variant = 'default' }) {
  
  const isPrimary = variant === 'primary';
  const brandColor = "#005bac"; 

  // --- 1. ANIMATION LOGIC ---
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Clean the input value: remove commas to get a raw integer (e.g., "12,902" -> 12902)
    const endValue = parseInt(String(value).replace(/,/g, ''), 10);

    // If value isn't a number (e.g. "Loading..."), just set it directly
    if (isNaN(endValue)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(value);
      return;
    }

    // Animation settings
    let startTimestamp = null;
    const duration = 2000; // 2 seconds to complete

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function (easeOutExpo): starts fast, slows down at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      // Calculate current number
      const current = Math.floor(easeProgress * endValue);
      setDisplayValue(current);

      // Continue animation if not finished
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);

  }, [value]);

  // Format the number back to string with commas (e.g., 12902 -> "12,902")
  const formattedOutput = typeof displayValue === 'number' 
    ? displayValue.toLocaleString() 
    : displayValue;


  // --- 2. STYLE LOGIC (Existing) ---
  const containerStyle = isPrimary 
    ? { backgroundColor: brandColor, color: 'white' } 
    : { backgroundColor: 'white', color: '#374151' }; 

  const valueStyle = isPrimary 
    ? { color: 'white' } 
    : { color: brandColor }; 

  const iconStyle = isPrimary 
    ? { color: 'white', opacity: 0.3 } 
    : { color: brandColor, opacity: 0.2 };

  return (
    <div 
      className="card w-full shadow-sm" 
      style={containerStyle} 
    >
      <div className="card-body flex flex-row items-center justify-between">
        
        {/* Left Side: Data */}
        <div>
          <h2 className={`card-title text-sm font-medium mb-1 ${isPrimary ? 'text-white/80' : 'text-gray-500'}`}>
            {title}
          </h2>
          
          {/* The Big Number (Animated) */}
          <div className="text-4xl font-bold" style={valueStyle}>
            {formattedOutput}
          </div>
        </div>

        {/* Right Side: Icon */}
        <div className="text-6xl" style={iconStyle}>
          {icon}
        </div>

      </div>
    </div>
  );
}