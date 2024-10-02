import React from 'react'
import { IconProps } from './types'

export const IconFlexDirectionSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-280h360v280H80Zm0-360v-280h360v280H80Zm80-80h200v-120H160v120Zm560 440L520-360l56-56 104 103v-487h80v487l104-103 56 56-200 200Z" />
  </svg>
)
