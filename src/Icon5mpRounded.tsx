import React from 'react'
import { IconProps } from './types'

const Icon5mpRounded: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <rect height="1.5" width="1.5" x="15" y="14" />
        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,9c-0.55,0-1-0.45-1-1V6.5 c0-0.55,0.45-1,1-1h2.75c0.41,0,0.75,0.34,0.75,0.75S14.16,7,13.75,7H11.5v1h2c0.55,0,1,0.45,1,1v1.5c0,0.55-0.45,1-1,1h-2.75 c-0.41,0-0.75-0.34-0.75-0.75S10.34,10,10.75,10H13V9H11z M12.5,17.75c0,0.41-0.34,0.75-0.75,0.75S11,18.17,11,17.75V14h-1v2.25 C10,16.67,9.66,17,9.25,17S8.5,16.67,8.5,16.25V14h-1v3.75c0,0.41-0.34,0.75-0.75,0.75S6,18.17,6,17.75V13.5c0-0.55,0.45-1,1-1 h4.5c0.55,0,1,0.45,1,1V17.75z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z" />
      </g>
    </g>
  </svg>
)

export { Icon5mpRounded as default }