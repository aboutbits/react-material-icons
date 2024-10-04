import React from 'react'
import { IconProps } from './types'

const IconViewCozySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-540v-300h300v300H120Zm0 420v-300h300v300H120Zm420-420v-300h300v300H540Zm0 420v-300h300v300H540Z" />
  </svg>
)

export { IconViewCozySharpFilled as default }
