import React from 'react'
import { IconProps } from './types'

const IconHomeMiniSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-760q76 0 148 18.5t128 54q56 35.5 90 87.5t34 120H80q0-68 34-120t90-87.5q56-35.5 128-54T480-760ZM360-200q-94 0-167.5-55.5T92-400h776q-27 89-100.5 144.5T600-200H360Z" />
  </svg>
)

export { IconHomeMiniSharpFilled as default }
