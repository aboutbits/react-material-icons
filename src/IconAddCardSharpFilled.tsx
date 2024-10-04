import React from 'react'
import { IconProps } from './types'

const IconAddCardSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-480h640v-160H160v160ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM80-160v-640h800v320H760q-83 0-141.5 58.5T560-280v120H80Z" />
  </svg>
)

export { IconAddCardSharpFilled as default }
