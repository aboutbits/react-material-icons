import React from 'react'
import { IconProps } from './types'

const IconMilitaryTech: React.FC<IconProps> = ({
  title = 'IconMilitaryTech',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M17,10.43V2H7v8.43c0,0.35,0.18,0.68,0.49,0.86l4.18,2.51l-0.99,2.34l-3.41,0.29l2.59,2.24L9.07,22L12,20.23L14.93,22 l-0.78-3.33l2.59-2.24l-3.41-0.29l-0.99-2.34l4.18-2.51C16.82,11.11,17,10.79,17,10.43z M13,12.23l-1,0.6l-1-0.6V3h2V12.23z" />
    </g>
  </svg>
)

export { IconMilitaryTech as default }
