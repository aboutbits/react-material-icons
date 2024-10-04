import React from 'react'
import { IconProps } from './types.js'

export const IconLanguageUsDvorakOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h130v-240H240v240Zm-80 80v-400h210q33 0 56.5 23.5T450-600v240q0 33-23.5 56.5T370-280H160Zm465 0L490-680h80l95 278 95-278h80L705-280h-80Z" />
  </svg>
)