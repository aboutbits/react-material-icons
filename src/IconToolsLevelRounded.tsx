import React from 'react'
import { IconProps } from './types'

export const IconToolsLevelRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h640q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H160Zm0-80h640v-240h-94q7 14 10.5 29t3.5 31q0 57-41.5 98.5T580-400H380q-57 0-98.5-41.5T240-540q0-16 3.5-31t10.5-29h-94v240Zm220-120h60v-120h-60q-24 0-42 18t-18 42q0 24 18 42t42 18Zm140 0h60q24 0 42-18t18-42q0-24-18-42t-42-18h-60v120Zm280 120H160h640Z" />
  </svg>
)
