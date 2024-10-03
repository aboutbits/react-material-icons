import React from 'react'
import { IconProps } from './types.js'

export const IconCo2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-360v-240h200v240H400Zm60-60h80v-120h-80v120Zm-340 60v-240h200v80h-60v-20h-80v120h80v-20h60v80H120Zm560 120v-140h120v-40H680v-60h180v140H740v40h120v60H680Z" />
  </svg>
)
