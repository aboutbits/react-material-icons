import React from 'react'
import { IconProps } from './types.js'

export const IconMedicalServicesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-640h240v-160h320v160h240v640H80Zm320-640h160v-80H400v80Zm40 360v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z" />
  </svg>
)
