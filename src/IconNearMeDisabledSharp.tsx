import React from 'react'
import { IconProps } from './types.js'

export const IconNearMeDisabledSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M516-120 402-402 120-516v-56l195-73-203-203 57-57 736 736-57 57-203-203-73 195h-56Zm191-361-63-63 60-160-160 60-63-63 359-133-133 359ZM542-268l41-109-206-206-109 41 196 78 78 196Zm52-326ZM480-480Z" />
  </svg>
)
