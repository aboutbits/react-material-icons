import React from 'react'
import { IconProps } from './types'

const IconVibrationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM18 3H6v18h12V3zm-2 16H8V5h8v14z" />
  </svg>
)

export { IconVibrationSharp as default }
