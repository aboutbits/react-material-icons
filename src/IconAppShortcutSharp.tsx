import React from 'react'
import { IconProps } from './types'

const IconAppShortcutSharp: React.FC<IconProps> = ({ ...props }) => (
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
      <g>
        <polygon points="17,18 7,18 7,6 17,6 17,7 19,7 19,1 5,1 5,1 5,23 19,23 19,17 17,17" />
        <polygon points="20.38,9.62 21,11 21.62,9.62 23,9 21.62,8.38 21,7 20.38,8.38 19,9" />
        <polygon points="16,8 14.75,10.75 12,12 14.75,13.25 16,16 17.25,13.25 20,12 17.25,10.75" />
        <polygon points="21,13 20.38,14.38 19,15 20.38,15.62 21,17 21.62,15.62 23,15 21.62,14.38" />
      </g>
    </g>
  </svg>
)

export { IconAppShortcutSharp as default }