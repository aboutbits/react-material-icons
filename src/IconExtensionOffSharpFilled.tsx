import React from 'react'
import { IconProps } from './types'

export const IconExtensionOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232l680 680H568q0-48-30.5-84T460-240q-47 0-77.5 36T352-120H120Zm680-154L274-800h86q0-42 29-71t71-29q42 0 71 29t29 71h240v240q42 0 71 29t29 71q0 42-29 71t-71 29v86Zm-9 219L55-791l57-57 736 736-57 57Z" />
  </svg>
)
