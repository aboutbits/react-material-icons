import React from 'react'
import { IconProps } from './types'

const IconHevcSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h60v80h40v-80h60v240h-60v-100h-40v100h-60Zm200 0v-240h140v60h-80v20h80v60h-80v40h80v60H320Zm200 0-40-240h60l30 180 30-180h60l-40 240H520Zm160 0v-240h160v80h-60v-20h-40v120h40v-20h60v80H680Z" />
  </svg>
)

export { IconHevcSharp as default }
