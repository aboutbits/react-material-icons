import React from 'react'
import { IconProps } from './types.js'

export const IconGarageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm200-240q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400ZM200-516v296h80v-80h400v80h80v-296l-77-224H277l-77 224Zm106-64 28-80h292l28 80H306ZM160-800v640-640Zm120 420v-120h400v120H280Z" />
  </svg>
)
