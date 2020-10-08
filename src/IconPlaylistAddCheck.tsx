import React from 'react'
import { IconProps } from './types'

const IconPlaylistAddCheck: React.FC<IconProps> = ({
  title = 'IconPlaylistAddCheck',
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
      <g>
        <g>
          <path d="M14,10H2v2h12V10z M14,6H2v2h12V6z M2,16h8v-2H2V16z M21.5,11.5L23,13l-6.99,7l-4.51-4.5L13,14l3.01,3L21.5,11.5z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconPlaylistAddCheck as default }
