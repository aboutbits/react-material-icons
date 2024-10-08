import React from 'react'
import { IconProps } from './types'

const IconComicBubbleOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-124 324-240H160v-164L44-520l116-116v-164h164l116-116 116 116h164v164l116 116-116 116 115 226q7 13 4 25.5T828-132q-8 8-20.5 11t-25.5-4L556-240 440-124Z" />
  </svg>
)

export { IconComicBubbleOutlinedFilled as default }
