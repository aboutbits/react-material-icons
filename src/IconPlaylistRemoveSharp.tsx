import React from 'react'
import { IconProps } from './types'

const IconPlaylistRemoveSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M3,16h7v-2H3V16z M14.41,22L17,19.41L19.59,22L21,20.59L18.41,18L21,15.41L19.59,14 L17,16.59L14.41,14L13,15.41L15.59,18L13,20.59L14.41,22z" />
    </g>
  </svg>
)

export { IconPlaylistRemoveSharp as default }
