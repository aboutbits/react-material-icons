import React from 'react'
import { IconProps } from './types'

const IconMarginSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm160-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM280-440h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Z" />
  </svg>
)

export { IconMarginSharpFilled as default }
