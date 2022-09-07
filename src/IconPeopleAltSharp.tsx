import React from 'react'
import { IconProps } from './types'

const IconPeopleAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <g>
          <path
            d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z"
            fillRule="evenodd"
          />
        </g>
        <g>
          <circle cx="9" cy="8" fillRule="evenodd" r="4" />
        </g>
        <g>
          <path
            d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z"
            fillRule="evenodd"
          />
        </g>
        <g>
          <path
            d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z"
            fillRule="evenodd"
          />
        </g>
      </g>
    </g>
  </svg>
)

export { IconPeopleAltSharp as default }
