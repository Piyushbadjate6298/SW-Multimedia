import React from 'react';

// Custom inline SVG visuals for the 6 steps of the Student Journey
export default function JourneyVisual({ stepIndex }) {
  switch (stepIndex) {
    case 1: // Enroll
      return (
        <svg className="journey-svg svg-enroll" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="enrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0059ff" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowEnroll" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Dashboard card layout */}
          <rect x="40" y="25" width="120" height="70" rx="12" fill="rgba(255, 255, 255, 0.03)" stroke="url(#enrollGrad)" strokeWidth="1.5" />
          <line x1="55" y1="42" x2="110" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="54" x2="90" y2="54" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="66" x2="100" y2="66" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="78" x2="120" y2="78" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
          
          {/* Onboarding Profile Avatar */}
          <circle cx="135" cy="48" r="14" fill="rgba(0, 217, 255, 0.15)" stroke="#00d9ff" strokeWidth="1" />
          <path d="M125 58 C125 54, 145 54, 145 58" stroke="#00d9ff" strokeWidth="1" fill="none" />
          
          {/* Glowing Checkmark Badge */}
          <circle className="pulse-element" cx="145" cy="72" r="12" fill="url(#enrollGrad)" filter="url(#glowEnroll)" />
          <path d="M140 72 L143 75 L149 69" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* Floating plus signs */}
          <path className="float-fast" d="M30 45 h6 M33 42 v6" stroke="#00d9ff" strokeWidth="1.5" />
          <path className="float-slow" d="M170 35 h6 M173 32 v6" stroke="#0059ff" strokeWidth="1.5" />
          <circle className="float-medium" cx="165" cy="80" r="3" fill="#00d9ff" />
        </svg>
      );

    case 2: // Learn
      return (
        <svg className="journey-svg svg-learn" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="learnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00bbf9" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowLearn" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Laptop Base & Screen */}
          <path d="M35 85 L165 85 L175 92 L25 92 Z" fill="rgba(255,255,255,0.06)" stroke="url(#learnGrad)" strokeWidth="1.5" />
          <rect x="45" y="25" width="110" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="url(#learnGrad)" strokeWidth="1.5" />
          
          {/* Glowing Code inside the Laptop Screen */}
          <g className="code-text" filter="url(#glowLearn)">
            <rect x="55" y="35" width="25" height="4" rx="2" fill="#00f5d4" />
            <rect x="85" y="35" width="40" height="4" rx="2" fill="#00bbf9" />
            <rect x="55" y="45" width="65" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
            <rect x="55" y="55" width="45" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="55" y="55" width="45" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="55" y="65" width="30" height="4" rx="2" fill="#00f5d4" />
            <rect x="90" y="65" width="15" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
          </g>

          {/* Database Stack icon floating */}
          <g className="db-stack float-slow" transform="translate(152, 18)">
            <ellipse cx="15" cy="15" rx="14" ry="5" fill="rgba(0, 245, 212, 0.15)" stroke="#00f5d4" strokeWidth="1" />
            <path d="M1 15 A14 5 0 0 0 29 15 L29 22 A14 5 0 0 1 1 22 Z" fill="rgba(0, 245, 212, 0.15)" stroke="#00f5d4" strokeWidth="1" />
            <path d="M1 22 A14 5 0 0 0 29 22 L29 29 A14 5 0 0 1 1 29 Z" fill="rgba(0, 245, 212, 0.25)" stroke="#00f5d4" strokeWidth="1" />
          </g>

          {/* Code tags floating */}
          <text className="float-fast code-tag" x="22" y="45" fill="#00f5d4" fontSize="16" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
          <circle className="float-medium" cx="28" cy="72" r="3" fill="#00bbf9" />
        </svg>
      );

    case 3: // Projects
      return (
        <svg className="journey-svg svg-projects" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="projectsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9b5de5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f15bb5" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowProjects" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Main dashboard wireframe */}
          <rect x="35" y="20" width="105" height="75" rx="8" fill="rgba(255, 255, 255, 0.02)" stroke="url(#projectsGrad)" strokeWidth="1.5" />
          <line x1="35" y1="34" x2="140" y2="34" stroke="url(#projectsGrad)" strokeWidth="1" />
          <circle cx="43" cy="27" r="2.5" fill="#f15bb5" />
          <circle cx="51" cy="27" r="2.5" fill="#9b5de5" />
          
          {/* Wireframe grids */}
          <rect x="43" y="42" width="40" height="20" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="90" y="42" width="42" height="42" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="43" y="68" width="40" height="16" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          
          {/* Floating components/Folder blocks representing building projects */}
          <g className="folder-block float-slow" transform="translate(130, 48)">
            <path d="M5 5 L18 5 L22 10 L45 10 L45 35 L5 35 Z" fill="rgba(155, 93, 229, 0.1)" stroke="url(#projectsGrad)" strokeWidth="1.5" filter="url(#glowProjects)" />
            <circle cx="15" cy="20" r="3.5" fill="#f15bb5" />
            <line x1="24" y1="20" x2="38" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="26" x2="34" y2="26" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Rotating gear */}
          <g className="gear-spinner" transform="translate(160, 24)">
            <circle cx="12" cy="12" r="7" fill="none" stroke="#f15bb5" strokeWidth="2" />
            <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12 M5 5 L7 7 M17 17 L19 19 M19 5 L17 7 M5 17 L7 15" stroke="#f15bb5" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" fill="#252529" />
          </g>
          
          <circle className="float-medium" cx="22" cy="78" r="4.5" fill="#f15bb5" />
        </svg>
      );

    case 4: // Internship
      return (
        <svg className="journey-svg svg-internship" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="internGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7096" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff9f1c" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowIntern" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Collaboration Grid Network */}
          <g className="network-nodes" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
            <line x1="55" y1="45" x2="100" y2="25" />
            <line x1="55" y1="45" x2="100" y2="65" />
            <line x1="145" y1="45" x2="100" y2="25" />
            <line x1="145" y1="45" x2="100" y2="65" />
            <line x1="55" y1="45" x2="100" y2="95" strokeDasharray="3,3" />
            <line x1="145" y1="45" x2="100" y2="95" strokeDasharray="3,3" />
          </g>
          
          {/* Glowing connecting signals */}
          <circle className="signal-dot-1" cx="100" cy="25" r="2.5" fill="#ff7096" filter="url(#glowIntern)" />
          <circle className="signal-dot-2" cx="100" cy="65" r="2.5" fill="#ff9f1c" filter="url(#glowIntern)" />

          {/* User profile cards connected */}
          {/* Center/Mentor Node */}
          <circle className="pulse-element" cx="100" cy="25" r="13" fill="rgba(255, 112, 150, 0.15)" stroke="#ff7096" strokeWidth="1.5" />
          <path d="M94 33 C94 28, 106 28, 106 33" stroke="#ff7096" strokeWidth="1.2" fill="none" />
          <circle cx="100" cy="22" r="4.5" fill="#ff7096" />

          {/* Intern Node Left */}
          <circle cx="55" cy="45" r="11" fill="rgba(255, 255, 255, 0.05)" stroke="url(#internGrad)" strokeWidth="1" />
          <path d="M50 51 C50 48, 60 48, 60 51" stroke="url(#internGrad)" strokeWidth="1" fill="none" />
          <circle cx="55" cy="42" r="3.5" fill="url(#internGrad)" />

          {/* Intern Node Right */}
          <circle cx="145" cy="45" r="11" fill="rgba(255, 255, 255, 0.05)" stroke="url(#internGrad)" strokeWidth="1" />
          <path d="M140 51 C140 48, 150 48, 150 51" stroke="url(#internGrad)" strokeWidth="1" fill="none" />
          <circle cx="145" cy="42" r="3.5" fill="url(#internGrad)" />

          {/* Kanban / Task card representation at the bottom */}
          <g className="float-slow" transform="translate(65, 78)">
            <rect x="0" y="0" width="70" height="24" rx="6" fill="rgba(255, 255, 255, 0.03)" stroke="#ff9f1c" strokeWidth="1" />
            <circle cx="10" cy="12" r="4" fill="#ff9f1c" />
            <line x1="20" y1="12" x2="52" y2="12" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="58" cy="12" r="2.5" fill="#ff7096" />
          </g>

          <circle className="float-fast" cx="168" cy="85" r="3.5" fill="#ff9f1c" />
          <circle className="float-medium" cx="30" cy="25" r="2" fill="#ff7096" />
        </svg>
      );

    case 5: // Interview Preparation
      return (
        <svg className="journey-svg svg-interview" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="interviewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7209b7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4361ee" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowInterview" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Resume Checklist Card */}
          <rect x="35" y="20" width="75" height="85" rx="8" fill="rgba(255,255,255,0.03)" stroke="url(#interviewGrad)" strokeWidth="1.5" />
          
          {/* Resume Content Mockups */}
          <rect x="47" y="32" width="32" height="5" rx="2" fill="url(#interviewGrad)" />
          <line x1="47" y1="46" x2="95" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
          <line x1="47" y1="54" x2="85" y2="54" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
          
          {/* Rating stars representing skills / mock score */}
          <g transform="translate(47, 65)" fill="#4361ee" stroke="none">
            <path d="M0 3 L2 5 L5 0 L2 -2 Z" fill="#7209b7" transform="scale(0.8)" />
            <line x1="12" y1="2" x2="52" y2="2" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g transform="translate(47, 75)" fill="#4361ee" stroke="none">
            <path d="M0 3 L2 5 L5 0 L2 -2 Z" fill="#7209b7" transform="scale(0.8)" />
            <line x1="12" y1="2" x2="40" y2="2" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g transform="translate(47, 85)" fill="#4361ee" stroke="none">
            <path d="M0 3 L2 5 L5 0 L2 -2 Z" fill="#7209b7" transform="scale(0.8)" />
            <line x1="12" y1="2" x2="48" y2="2" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Feedback/Speech bubbles floating */}
          <g className="chat-bubble float-slow" transform="translate(115, 30)">
            <path d="M5 5 L55 5 C58 5, 60 7, 60 10 L60 30 C60 33, 58 35, 55 35 L20 35 L10 42 L13 35 L5 35 C2 35, 0 33, 0 30 L0 10 C0 7, 2 5, 5 5 Z" fill="rgba(114, 9, 183, 0.15)" stroke="#7209b7" strokeWidth="1" filter="url(#glowInterview)" />
            {/* Visual dialog items */}
            <circle cx="15" cy="18" r="3.5" fill="#4361ee" />
            <circle cx="28" cy="18" r="3.5" fill="#7209b7" />
            <circle cx="41" cy="18" r="3.5" fill="rgba(255,255,255,0.6)" />
            <line x1="12" y1="26" x2="48" y2="26" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
          </g>
          
          <circle className="float-fast" cx="160" cy="85" r="4" fill="#4361ee" />
          <path className="float-medium" d="M125 80 h4 M127 78 v4" stroke="#7209b7" strokeWidth="1.5" />
        </svg>
      );

    case 6: // Placement
      return (
        <svg className="journey-svg svg-placement" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="placementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fee440" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f15bb5" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowPlacement" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Upward Growth Chart Grid */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3,3">
            <line x1="40" y1="90" x2="160" y2="90" />
            <line x1="40" y1="70" x2="160" y2="70" />
            <line x1="40" y1="50" x2="160" y2="50" />
            <line x1="40" y1="30" x2="160" y2="30" />
          </g>

          {/* Rising Chart Bars */}
          <rect x="42" y="76" width="10" height="14" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="62" y="60" width="10" height="30" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="82" y="46" width="10" height="44" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect className="growth-bar-active" x="102" y="32" width="10" height="58" rx="2" fill="url(#placementGrad)" />
          
          {/* Upward Arrow Path */}
          <path className="upward-arrow" d="M42 82 Q72 66, 102 44 L110 32" fill="none" stroke="#fee440" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M102 32 L112 32 L112 42" fill="none" stroke="#fee440" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Placement Success Trophy */}
          <g className="trophy-award float-slow" transform="translate(132, 28)">
            {/* Glow backing */}
            <circle cx="16" cy="18" r="16" fill="rgba(254, 228, 64, 0.12)" filter="url(#glowPlacement)" />
            
            {/* Trophy cups */}
            <path d="M6 10 C6 22, 26 22, 26 10 Z" fill="url(#placementGrad)" stroke="#fee440" strokeWidth="1.2" />
            <path d="M16 20 L16 27" stroke="#fee440" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M10 27 L22 27" stroke="#fee440" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M4 12 C1 12, 1 17, 6 17 M28 12 C31 12, 31 17, 26 17" fill="none" stroke="#fee440" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Sparkles */}
            <circle className="pulse-element" cx="3" cy="6" r="1.5" fill="#fee440" />
            <circle className="pulse-element" cx="30" cy="22" r="1.5" fill="#f15bb5" />
          </g>

          {/* Confetti floats */}
          <circle className="float-fast" cx="28" cy="40" r="3" fill="#fee440" />
          <path className="float-medium" d="M142 85 l3 3" stroke="#f15bb5" strokeWidth="2" strokeLinecap="round" />
          <circle className="float-slow" cx="22" cy="72" r="2.5" fill="#f15bb5" />
        </svg>
      );

    default:
      return null;
  }
}
