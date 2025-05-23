import React from "react";

interface AngleClipButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const AngleClipButton = ({ text, onClick, className = "" }: AngleClipButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* Border layer with glow */}
      <div 
        className="absolute inset-0 bg-cyan-400"
        style={{
          clipPath: "polygon(0 30%, 20px 0, 100% 0, 100% calc(100% - 30%), calc(100% - 20px) 100%, 0 100%)",
          filter: "drop-shadow(0 0 3px rgba(6, 182, 212, 0.6))"
        }}
      />
      
      {/* Background layer */}
      <div 
        className="relative bg-cyan-500 group-hover:bg-cyan-600 transition-colors duration-200"
        style={{
          clipPath: "polygon(2px calc(30% + 2px), 22px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 30% - 2px), calc(100% - 22px) calc(100% - 2px), 2px calc(100% - 2px))",
        }}
      >
        <div className="px-8 py-3 text-white font-medium text-center">
          {text}
        </div>
      </div>
      
      {/* Top-left horizontal accent line */}
        {/* Top-left angled line */}
        <div 
        className="absolute bg-cyan-200 z-10 rotate-[145deg]" 
        style={{ 
            width: "25px", 
            height: "2px", 
            top: "0px", 
            left: "0px", 
            transform: "translate(5px, 5px)" 
        }}
        />

        {/* Top-left extension bending to the right */}
        <div 
        className="absolute bg-cyan-200 z-10" 
        style={{ 
            width: "40px", 
            height: "2px", 
            top: "0px", 
            left: "20px",   // start just after the angled line
            transform: "translate(-5px, -8px)"  // adjust to align at top
        }}
        />

        {/* Bottom-right horizontal accent line */}
        {/* Bottom-right angled line */}
        <div 
        className="absolute bg-cyan-200 z-10 rotate-[140deg]" 
        style={{ 
            width: "25px", 
            height: "2px", 
            bottom: "0px", 
            right: "0px", 
            transform: "translate(-3px, -5px)" 
        }}
        />

        {/* Bottom-right extension bending to the left */}
        <div 
        className="absolute bg-cyan-200 z-10" 
        style={{ 
            width: "40px", 
            height: "2px", 
            bottom: "0px", 
            right: "20px",  // Start just left of the angled line
            transform: "translate(4px, 10px)"  // Align at bottom
        }}
        />


      
      {/* Flash effect on click */}
      <div 
        className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-100"
        style={{
          clipPath: "polygon(2px calc(30% + 2px), 22px 2px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 30% - 2px), calc(100% - 22px) calc(100% - 2px), 2px calc(100% - 2px))",
        }}
      />
    </button>
  );
};

// Example usage
const ButtonDemo = () => {
  return (
    <div className="p-16 flex justify-center items-center" style={{ 
      background: "linear-gradient(to bottom, #0a4035, #063428)",
      height: "300px"
    }}>
      <AngleClipButton 
        text="Home" 
        onClick={() => console.log('Button clicked')}
        className="w-48"
      />
    </div>
  );
};

export default ButtonDemo;