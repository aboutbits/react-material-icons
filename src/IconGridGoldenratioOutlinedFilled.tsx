import React from 'react'
import { IconProps } from './types'

const IconGridGoldenratioOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80v-280H80v-80h280v-80H80v-80h280v-280h80v280h80v-280h80v280h280v80H600v80h280v80H600v280h-80v-280h-80v280h-80Zm80-360h80v-80h-80v80Z" />
  </svg>
)

export { IconGridGoldenratioOutlinedFilled as default }
