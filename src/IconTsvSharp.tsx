import React from 'react'
import { IconProps } from './types'

export const IconTsvSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M250-360h60v-180h50v-60H200v60h50v180Zm130 0h160v-146H440v-34h100v-60H380v144h100v36H380v60Zm250 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)
