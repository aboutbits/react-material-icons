import React from 'react'
import { IconProps } from './types'

const IconPinInvokeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M22,12v6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10l0,2H4v12h16v-6H22z M22,7c0-1.66-1.34-3-3-3 c-1.66,0-3,1.34-3,3s1.34,3,3,3C20.66,10,22,8.66,22,7z M9.34,12h2.24l-2.95,2.95l1.41,1.41L13,13.42v2.24h2V10H9.34V12z" />
  </svg>
)

export { IconPinInvokeOutlined as default }
