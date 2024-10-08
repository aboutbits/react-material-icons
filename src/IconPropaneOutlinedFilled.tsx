import React from 'react'
import { IconProps } from './types'

const IconPropaneOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-720h160v-40H400v40ZM280-120v-120q-100 0-170-70T40-480q0-100 70-170t170-70h40v-40q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v40h40q100 0 170 70t70 170q0 100-70 170t-170 70v120h-80v-120H360v120h-80Z" />
  </svg>
)

export { IconPropaneOutlinedFilled as default }
