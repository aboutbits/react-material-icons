import React from 'react'
import { IconProps } from './types'

export const IconDualScreenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m240-256 240 96v-544l-240-96v544Zm-80 54v-678h80l320 121v717L160-202Zm320 2v-80h240v-520H240v-80h560v680H480Zm-240-56v-544 544Z" />
  </svg>
)
