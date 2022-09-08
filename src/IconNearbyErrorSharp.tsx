import React from 'react'
import { IconProps } from './types'

const IconNearbyErrorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M12,7.58L16.42,12L12,16.42L7.58,12L12,7.58z M12,19.2L4.8,12L12,4.8l6,6V7.17l-5.99-5.99L1.18,12.01l10.83,10.83 L18,16.83V13.2L12,19.2z M20,20h2v2h-2V20z M22,10h-2v8h2V10" />
      </g>
    </g>
  </svg>
)

export { IconNearbyErrorSharp as default }
