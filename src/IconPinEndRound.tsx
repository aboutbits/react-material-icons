import React from 'react'
import { IconProps } from './types'

const IconPinEndRound: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M20,12V6H4v12h10l0,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v6H20z M19,14c-1.66,0-3,1.34-3,3s1.34,3,3,3 c1.66,0,3-1.34,3-3S20.66,14,19,14z M14.66,13.66c0.39-0.39,0.39-1.02,0-1.41l-2.12-2.12l1.27-1.27C14.12,8.54,13.9,8,13.45,8H9.5 C9.22,8,9,8.22,9,8.5v3.95c0,0.45,0.54,0.67,0.85,0.35l1.27-1.27l2.12,2.12C13.63,14.05,14.27,14.05,14.66,13.66z" />
  </svg>
)

export { IconPinEndRound as default }
