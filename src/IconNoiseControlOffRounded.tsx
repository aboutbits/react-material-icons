import React from 'react'
import { IconProps } from './types'

const IconNoiseControlOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g>
        <path d="M12,4c1.2,0,2.33,0.26,3.35,0.74c0.36,0.17,0.79,0.12,1.07-0.17l0.06-0.06c0.47-0.47,0.35-1.29-0.25-1.57 C14.95,2.34,13.51,2,12,2S9.05,2.34,7.76,2.94c-0.6,0.28-0.72,1.1-0.25,1.57l0.06,0.06c0.28,0.28,0.71,0.34,1.07,0.17 C9.67,4.26,10.8,4,12,4z" />
        <path d="M20,12c0,1.2-0.26,2.33-0.74,3.35c-0.17,0.36-0.12,0.79,0.17,1.07l0.06,0.06c0.47,0.47,1.29,0.35,1.57-0.25 C21.66,14.95,22,13.51,22,12s-0.34-2.95-0.94-4.24c-0.28-0.6-1.1-0.72-1.57-0.25l-0.06,0.06c-0.28,0.28-0.34,0.71-0.17,1.07 C19.74,9.67,20,10.8,20,12z" />
        <path d="M12,20c-1.2,0-2.33-0.26-3.35-0.74c-0.36-0.17-0.79-0.12-1.07,0.17l-0.06,0.06c-0.47,0.47-0.35,1.29,0.25,1.57 C9.05,21.66,10.49,22,12,22s2.95-0.34,4.24-0.94c0.6-0.28,0.72-1.1,0.25-1.57l-0.06-0.06c-0.28-0.28-0.71-0.34-1.07-0.17 C14.33,19.74,13.2,20,12,20z" />
        <path d="M4,12c0-1.2,0.26-2.33,0.74-3.35c0.17-0.36,0.12-0.79-0.17-1.07L4.51,7.51C4.04,7.04,3.23,7.16,2.94,7.76 C2.34,9.05,2,10.49,2,12s0.34,2.95,0.94,4.24c0.28,0.6,1.1,0.72,1.57,0.25l0.06-0.06c0.28-0.28,0.34-0.71,0.17-1.07 C4.26,14.33,4,13.2,4,12z" />
        <path d="M11.5,6c-2.89,0-5.15,2.74-4.33,5.76c0.22,0.8,0.68,1.51,1.27,2.1l1.27,1.27c0.15,0.16,0.28,0.38,0.4,0.71 c0.41,1.13,1.38,2.04,2.58,2.16c1.25,0.12,2.37-0.53,2.93-1.53c0.36-0.65-0.15-1.45-0.9-1.45h0c-0.34,0-0.68,0.16-0.84,0.47 C13.72,15.78,13.38,16,13,16c-0.43,0-0.81-0.27-0.95-0.68c-0.15-0.44-0.4-1.08-0.93-1.61l-1.36-1.36C9.28,11.87,9,11.19,9,10.5 C9,9.12,10.12,8,11.5,8c0.98,0,1.83,0.57,2.24,1.4c0.18,0.36,0.52,0.6,0.91,0.6h0c0.75,0,1.22-0.79,0.89-1.46 C14.82,7.04,13.28,6,11.5,6z" />
        <circle cx="13.5" cy="12.5" r="1.5" />
      </g>
    </g>
  </svg>
)

export { IconNoiseControlOffRounded as default }
