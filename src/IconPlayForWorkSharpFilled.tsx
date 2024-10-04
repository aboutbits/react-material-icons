import React from 'react'
import { IconProps } from './types.js'

export const IconPlayForWorkSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-100 0-170-70t-70-170h80q0 66 47 113t113 47q66 0 113-47t47-113h80q0 100-70 170t-170 70Zm0-201L320-521l56-57 64 64v-246h80v246l64-64 56 57-160 160Z" />
  </svg>
)