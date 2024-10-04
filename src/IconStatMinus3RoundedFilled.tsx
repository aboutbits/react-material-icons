import React from 'react'
import { IconProps } from './types.js'

export const IconStatMinus3RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-196 156-155q11-11 27.5-11.5T692-351q11 11 11 28t-11 28L537-140q-23 23-57 23t-57-23L268-295q-11-11-11.5-27.5T268-351q11-11 28-11t28 11l156 155Zm0-238 156-155q11-11 27.5-11.5T692-589q11 11 11 28t-11 28L537-378q-23 23-57 23t-57-23L268-533q-11-11-11.5-27.5T268-589q11-11 28-11t28 11l156 155Zm0-238 156-155q11-11 27.5-11.5T692-827q11 11 11 28t-11 28L537-616q-23 23-57 23t-57-23L268-771q-11-11-11.5-27.5T268-827q11-11 28-11t28 11l156 155Z" />
  </svg>
)
