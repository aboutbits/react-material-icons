import React from 'react'
import { IconProps } from './types'

const IconStat3Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-288 324-133q-11 11-27.5 11.5T268-133q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-133q-11 11-28 11t-28-11L480-288Zm0-240L324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Zm0-240L324-613q-11 11-27.5 11.5T268-613q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l183 183-56 56-184-183Z" />
  </svg>
)

export { IconStat3Rounded as default }
