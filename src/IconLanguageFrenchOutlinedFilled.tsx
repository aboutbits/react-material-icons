import React from 'react'
import { IconProps } from './types'

const IconLanguageFrenchOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-400h280v80H240v80h160v80H240v160h-80Zm360 0v-400h200q33 0 56.5 23.5T800-600v80q0 32-22 54.5T726-440l74 160h-84l-75-160h-41v160h-80Zm80-240h120v-80H600v80Z" />
  </svg>
)

export { IconLanguageFrenchOutlinedFilled as default }
