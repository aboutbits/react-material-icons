import React from 'react'
import { IconProps } from './types'

const IconArrowBack2Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M253-446q-9-6-13.5-15t-4.5-19q0-10 4.5-19t13.5-15l326-207q5-3 10.5-4.5T600-727q16 0 28 11.5t12 28.5v414q0 17-12 28.5T600-233q-5 0-10.5-1.5T579-239L253-446Zm307-34Zm0 134v-268L350-480l210 134Z" />
  </svg>
)

export { IconArrowBack2Rounded as default }
