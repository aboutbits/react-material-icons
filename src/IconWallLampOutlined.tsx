import React from 'react'
import { IconProps } from './types'

export const IconWallLampOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h80v240h-80Zm214-400h372l-72-240H406l-72 240Zm0 0h372-372Zm-94 320v-80h200q17 0 28.5-11.5T480-320v-120H280q-20 0-32-15.5t-6-35.5l96-320q4-13 14-21t24-8h288q14 0 24 8t14 21l96 320q6 20-6 35.5T760-440H560v120q0 50-35 85t-85 35H240Z" />
  </svg>
)
