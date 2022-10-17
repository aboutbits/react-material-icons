import React from 'react'
import { IconProps } from './types'

const IconSignalWifiBadRounded: React.FC<IconProps> = ({ ...props }) => (
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
        <path d="M23.21,8.24C20.22,5.6,16.3,4,12,4C7.7,4,3.78,5.6,0.79,8.24C0.35,8.63,0.32,9.3,0.73,9.71l10.56,10.58 c0.19,0.19,0.45,0.29,0.7,0.29V14c0-1.1,0.9-2,2-2h6.99l2.29-2.29C23.68,9.3,23.65,8.63,23.21,8.24z" />
        <path d="M20.3,14.71L20.3,14.71c-0.39-0.39-1.02-0.39-1.41,0l-1.39,1.38l-1.39-1.38c-0.39-0.39-1.02-0.39-1.41,0 c-0.39,0.39-0.39,1.02,0,1.41l1.39,1.39l-1.39,1.39c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0l1.39-1.38 l1.39,1.38c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41l-1.38-1.39l1.38-1.39C20.69,15.73,20.69,15.1,20.3,14.71z" />
      </g>
    </g>
  </svg>
)

export { IconSignalWifiBadRounded as default }
