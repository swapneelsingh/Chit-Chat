const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

// import React, { useState, useEffect } from 'react';

// const AuthImagePattern = ({ title = "Welcome Back", subtitle = "Continue your journey with us" }) => {
//   const [matrix, setMatrix] = useState([]);
//   const [glitchActive, setGlitchActive] = useState(false);
//   const [scanLine, setScanLine] = useState(0);

//   useEffect(() => {
//     // Initialize matrix rain
//     const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
//     const columns = 40;
//     const drops = new Array(columns).fill(0);
    
//     setMatrix(drops.map(() => 
//       Array(20).fill(0).map(() => ({
//         char: chars[Math.floor(Math.random() * chars.length)],
//         opacity: Math.random()
//       }))
//     ));

//     // Glitch effect
//     const glitchInterval = setInterval(() => {
//       setGlitchActive(true);
//       setTimeout(() => setGlitchActive(false), 150);
//     }, 3000);

//     // Scan line animation
//     const scanInterval = setInterval(() => {
//       setScanLine(prev => (prev + 1) % 100);
//     }, 50);

//     return () => {
//       clearInterval(glitchInterval);
//       clearInterval(scanInterval);
//     };
//   }, []);

//   return (
//     <div className="hidden lg:flex items-center justify-center bg-black p-12 relative overflow-hidden">
//       {/* Matrix rain background */}
//       <div className="absolute inset-0 opacity-20">
//         {matrix.map((column, colIndex) => (
//           <div
//             key={colIndex}
//             className="absolute top-0 text-green-400 font-mono text-xs"
//             style={{
//               left: `${(colIndex / matrix.length) * 100}%`,
//               animation: `matrix-fall ${2 + Math.random() * 3}s linear infinite`,
//               animationDelay: `${Math.random() * 2}s`
//             }}
//           >
//             {column.map((item, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className="block h-4"
//                 style={{ opacity: item.opacity }}
//               >
//                 {item.char}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Scanning line */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `linear-gradient(to bottom, transparent ${scanLine}%, rgba(0, 255, 255, 0.1) ${scanLine + 1}%, transparent ${scanLine + 2}%)`,
//           animation: 'scan-line 3s ease-in-out infinite'
//         }}
//       />

//       {/* Circuit board pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <svg className="w-full h-full" viewBox="0 0 400 400">
//           {/* Circuit traces */}
//           <defs>
//             <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
//               <path
//                 d="M 0,20 L 20,20 L 20,0 M 20,20 L 40,20 M 20,20 L 20,40"
//                 stroke="#00ffff"
//                 strokeWidth="0.5"
//                 fill="none"
//                 opacity="0.3"
//               />
//               <circle cx="20" cy="20" r="2" fill="#00ffff" opacity="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#circuit)" />
//         </svg>
//       </div>

//       {/* Holographic grid */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute border border-cyan-400 opacity-20"
//             style={{
//               width: `${60 + i * 40}px`,
//               height: `${60 + i * 40}px`,
//               left: '50%',
//               top: '50%',
//               transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
//               animation: `holo-rotate ${10 + i * 2}s linear infinite`,
//               borderRadius: i % 2 === 0 ? '0' : '50%'
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-md text-center relative z-10">
//         {/* Tech grid pattern */}
//         <div className="grid grid-cols-3 gap-4 mb-12 perspective-1000">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square bg-gray-900 relative overflow-hidden group cursor-pointer ${
//                 glitchActive ? 'animate-glitch' : ''
//               }`}
//               style={{
//                 border: '1px solid rgba(0, 255, 255, 0.3)',
//                 borderRadius: '4px',
//                 boxShadow: `
//                   inset 0 0 20px rgba(0, 255, 255, 0.1),
//                   0 0 20px rgba(0, 255, 255, 0.05)
//                 `,
//                 background: i === 4 
//                   ? 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(0, 150, 255, 0.05))'
//                   : 'radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
//                 animation: `tech-pulse ${2 + i * 0.3}s ease-in-out infinite alternate`
//               }}
//             >
//               {/* Inner circuit pattern */}
//               <div className="absolute inset-2 border border-cyan-400 opacity-30 group-hover:opacity-60 transition-opacity">
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
//               </div>
              
//               {/* Data stream effect */}
//               <div className="absolute inset-0 overflow-hidden">
//                 {[...Array(3)].map((_, j) => (
//                   <div
//                     key={j}
//                     className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
//                     style={{
//                       top: `${25 + j * 25}%`,
//                       animation: `data-stream ${1 + j * 0.5}s ease-in-out infinite`,
//                       animationDelay: `${i * 0.1 + j * 0.3}s`
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Futuristic text */}
//         <div className="relative">
//           <h2 
//             className={`text-4xl font-bold mb-6 text-white relative ${
//               glitchActive ? 'animate-text-glitch' : ''
//             }`}
//             style={{
//               fontFamily: '"Orbitron", monospace',
//               textShadow: `
//                 0 0 10px rgba(0, 255, 255, 0.5),
//                 0 0 20px rgba(0, 255, 255, 0.3),
//                 0 0 30px rgba(0, 255, 255, 0.1)
//               `,
//               letterSpacing: '0.1em'
//             }}
//           >
//             {title}
//           </h2>
          
//           <p 
//             className="text-lg text-gray-300 leading-relaxed font-mono"
//             style={{
//               opacity: 0.8,
//               letterSpacing: '0.05em'
//             }}
//           >
//             {subtitle}
//           </p>
//         </div>

//         {/* Terminal-style accent */}
//         <div className="mt-8 flex justify-center">
//           <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
//             <span className="animate-ping">▸</span>
//             <span>SYSTEM_READY</span>
//             <div className="w-2 h-4 bg-cyan-400 animate-pulse ml-2" />
//           </div>
//         </div>
//       </div>

//       {/* Custom animations */}
//       <style jsx>{`
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100vh); }
//           100% { transform: translateY(100vh); }
//         }
        
//         @keyframes scan-line {
//           0%, 100% { transform: translateY(-100%); }
//           50% { transform: translateY(100vh); }
//         }
        
//         @keyframes holo-rotate {
//           0% { transform: translate(-50%, -50%) rotate(0deg); }
//           100% { transform: translate(-50%, -50%) rotate(360deg); }
//         }
        
//         @keyframes tech-pulse {
//           0% { box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 20px rgba(0, 255, 255, 0.05); }
//           100% { box-shadow: inset 0 0 30px rgba(0, 255, 255, 0.2), 0 0 30px rgba(0, 255, 255, 0.1); }
//         }
        
//         @keyframes data-stream {
//           0% { transform: translateX(-100%); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: translateX(100%); opacity: 0; }
//         }
        
//         @keyframes glitch {
//           0%, 100% { transform: translate(0); }
//           10% { transform: translate(-2px, 2px); }
//           20% { transform: translate(2px, -2px); }
//           30% { transform: translate(-2px, -2px); }
//           40% { transform: translate(2px, 2px); }
//           50% { transform: translate(-2px, 2px); }
//           60% { transform: translate(2px, -2px); }
//           70% { transform: translate(-2px, -2px); }
//           80% { transform: translate(2px, 2px); }
//           90% { transform: translate(-2px, 2px); }
//         }
        
//         @keyframes text-glitch {
//           0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
//           10% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
//           20% { transform: translate(2px, -2px); filter: hue-rotate(180deg); }
//           30% { transform: translate(-2px, -2px); filter: hue-rotate(270deg); }
//           40% { transform: translate(2px, 2px); filter: hue-rotate(360deg); }
//           50% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
//           60% { transform: translate(2px, -2px); filter: hue-rotate(180deg); }
//           70% { transform: translate(-2px, -2px); filter: hue-rotate(270deg); }
//           80% { transform: translate(2px, 2px); filter: hue-rotate(360deg); }
//           90% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
//         }
        
//         .animate-glitch {
//           animation: glitch 0.3s ease-in-out;
//         }
        
//         .animate-text-glitch {
//           animation: text-glitch 0.5s ease-in-out;
//         }
        
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AuthImagePattern;