import React from 'react'
import { IconProps } from './types'

const IconDirectionsRailwayFilledTwoTone: React.FC<IconProps> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" y="0" />
    </g>
    <g>
      <g enableBackground="new">
        <path
          d="M6,15.5C6,16.33,6.67,17,7.5,17h9c0.83,0,1.5-0.67,1.5-1.5V12H6V15.5z M12,13 c0.83,0,1.5,0.67,1.5,1.5S12.83,16,12,16s-1.5-0.67-1.5-1.5S11.17,13,12,13z"
          enableBackground="new"
          opacity=".3"
        />
        <path
          d="M12,4C8.48,4,7.03,4.48,6.43,5h11.24C17.13,4.46,15.71,4,12,4z"
          enableBackground="new"
          opacity=".3"
        />
        <path d="M12,2C8,2,4,2.5,4,6v9.5C4,17.43,5.57,19,7.5,19L6,20v1h12v-1l-1.5-1c1.93,0,3.5-1.57,3.5-3.5V6C20,2.5,16.42,2,12,2z M12,4c3.71,0,5.13,0.46,5.67,1H6.43C7.03,4.48,8.48,4,12,4z M18,15.5c0,0.83-0.67,1.5-1.5,1.5h-9C6.67,17,6,16.33,6,15.5V12h12 V15.5z M18,10H6V7h12V10z" />
        <circle cx="12" cy="14.5" r="1.5" />
      </g>
    </g>
  </svg>
)

export { IconDirectionsRailwayFilledTwoTone as default }
