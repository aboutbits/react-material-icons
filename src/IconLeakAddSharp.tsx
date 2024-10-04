import React from 'react'
import { IconProps } from './types.js'

export const IconLeakAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-400v-80q74 0 139.5-28.5T374-586q49-49 77.5-114.5T480-840h80q0 91-34.5 171T431-529q-60 60-140 94.5T120-400Zm0-160v-80q83 0 141.5-58.5T320-840h80q0 116-82 198t-198 82Zm0-160v-120h120q0 50-35 85t-85 35Zm280 600q0-91 34.5-171T529-431q60-60 140-94.5T840-560v80q-74 0-139.5 28.5T586-374q-49 49-77.5 114.5T480-120h-80Zm160 0q0-116 82-198t198-82v80q-83 0-141.5 58.5T640-120h-80Zm160 0q0-50 35-85t85-35v120H720Z" />
  </svg>
)
