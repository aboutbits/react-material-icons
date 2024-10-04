import React from 'react'
import { IconProps } from './types'

const IconShadowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Z" />
  </svg>
)

export { IconShadowSharpFilled as default }
