import React from 'react'
import { IconProps } from './types'

const IconVariablesRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280H160q-17 0-28.5-11.5T120-320Zm80-40h560v-240H200v240Zm0 0v-240 240Z" />
  </svg>
)

export { IconVariablesRounded as default }
