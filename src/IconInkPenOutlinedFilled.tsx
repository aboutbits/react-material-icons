import React from 'react'
import { IconProps } from './types'

const IconInkPenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M611-461 461-612l111-110-29-29-219 219-56-56 218-219q24-24 56.5-24t56.5 24l29 29 50-50q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828-678L611-461ZM270-120H120v-150l284-285 151 150-285 285Z" />
  </svg>
)

export { IconInkPenOutlinedFilled as default }
