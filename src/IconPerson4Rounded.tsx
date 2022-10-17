import React from 'react'
import { IconProps } from './types'

const IconPerson4Rounded: React.FC<IconProps> = ({ ...props }) => (
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
        <g>
          <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22L4,18c0,1.1,0.9,2,2,2h12 c1.1,0,2-0.9,2-2l0-0.78C20,16.1,19.39,15.07,18.39,14.56z" />
        </g>
        <g>
          <path d="M12,12c2.21,0,4-1.79,4-4c0-1.37,0-3.5,0-3.5C16,3.67,15.33,3,14.5,3c-0.52,0-0.98,0.27-1.25,0.67 C12.98,3.27,12.52,3,12,3s-0.98,0.27-1.25,0.67C10.48,3.27,10.02,3,9.5,3C8.67,3,8,3.67,8,4.5c0,0,0,2.12,0,3.5 C8,10.21,9.79,12,12,12z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconPerson4Rounded as default }
