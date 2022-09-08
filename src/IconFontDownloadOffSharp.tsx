import React from 'react'
import { IconProps } from './types'

const IconFontDownloadOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M12.58,9.75l-0.87-0.87l0.23-0.66h0.1L12.58,9.75z M20.49,23.31L19.17,22H2V4.83L0.69,3.51L2.1,2.1l19.8,19.8L20.49,23.31z M12.1,14.93l-3.3-3.3L6.41,18h2.08l1.09-3.07H12.1z M10.35,7.52L10.92,6h2.14l2.55,6.79L22,19.17V2H4.83L10.35,7.52z" />
  </svg>
)

export { IconFontDownloadOffSharp as default }
