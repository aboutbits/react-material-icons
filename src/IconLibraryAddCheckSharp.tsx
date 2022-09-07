import React from 'react'
import { IconProps } from './types'

const IconLibraryAddCheckSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M22,2H6v16h16V2z M12.47,14L9,10.5l1.4-1.41l2.07,2.08L17.6,6L19,7.41L12.47,14z M4,6H2v16h16v-2H4V6z" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
  </svg>
)

export { IconLibraryAddCheckSharp as default }
