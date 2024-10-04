import React from 'react'
import { IconProps } from './types'

const IconFlag2OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-760h640l-80 200 80 200H280v360h-80Z" />
  </svg>
)

export { IconFlag2OutlinedFilled as default }
