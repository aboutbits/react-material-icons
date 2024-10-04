import React from 'react'
import { IconProps } from './types.js'

export const IconRvHookupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m780-100-56-56 44-44H472q-12 36-43 58t-69 22q-38 0-68.5-22T248-200h-48q-50 0-85-35t-35-85v-240h240v-120H80v-80h520q33 0 56.5 23.5T680-680v400h86l-42-42 56-58 140 140-140 140ZM400-560h200v-120H400v120Zm-40 360q17 0 28.5-11.5T400-240q0-17-11.5-28.5T360-280q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200Z" />
  </svg>
)