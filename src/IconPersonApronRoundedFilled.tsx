import React from 'react'
import { IconProps } from './types'

const IconPersonApronRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm160 320v-256q25 8 49 17t47 21q30 15 47 43.5t17 62.5v32q0 33-23.5 56.5T720-160h-80ZM400-300v-134q20-3 40-4.5t40-1.5q20 0 40 1.5t40 4.5v134H400Zm-240 60v-32q0-34 17-62.5t47-43.5q23-12 47-21t49-17v256h-80q-33 0-56.5-23.5T160-240Z" />
  </svg>
)

export { IconPersonApronRoundedFilled as default }
