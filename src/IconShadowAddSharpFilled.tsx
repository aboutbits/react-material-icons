import React from 'react'
import { IconProps } from './types'

const IconShadowAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-400v-120H400v-80h120v-120h80v120h120v80H600v120h-80ZM80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Z" />
  </svg>
)

export { IconShadowAddSharpFilled as default }
