import React from 'react'
import { IconProps } from './types'

const IconPediatricsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-680v-80h160v-120h80v120h160v80H280Zm0 600v-440q0-50 35-85t85-35h160q50 0 85 35t35 85v440H280Zm80-80h240v-360q0-17-11.5-28.5T560-560H400q-17 0-28.5 11.5T360-520v40h120v80H360v80h120v80H360v80Zm0 0v-400 400Z" />
  </svg>
)

export { IconPediatricsSharp as default }
