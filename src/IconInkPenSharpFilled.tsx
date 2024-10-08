import React from 'react'
import { IconProps } from './types'

const IconInkPenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M611-461 461-612l111-110-29-29-219 219-56-56 275-275 85 85 79-79 150 150-246 246ZM270-120H120v-150l284-285 151 150-285 285Z" />
  </svg>
)

export { IconInkPenSharpFilled as default }
