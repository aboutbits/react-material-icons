import React from 'react'
import { IconProps } from './types.js'

export const IconRepartitionOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-400v-80h560q33 0 56.5-23.5T760-560q0-33-23.5-56.5T680-640H233l64 63-57 57L80-680l160-160 57 56-64 64h447q66 0 113 47t47 113q0 66-47 113t-113 47H120Zm0 320v-240h720v240H120Zm80-80h133v-80H200v80Zm213 0h133v-80H413v80Zm214 0h133v-80H627v80Z" />
  </svg>
)