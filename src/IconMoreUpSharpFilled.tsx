import React from 'react'
import { IconProps } from './types'

const IconMoreUpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320v-360H320v-80h440v440h-80ZM480-120v-360H120v-80h440v440h-80Z" />
  </svg>
)

export { IconMoreUpSharpFilled as default }
