import React from 'react'
import { IconProps } from './types'

const IconFormatParagraphRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-160q-17 0-28.5-11.5T360-200v-200q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h320q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720h-40v520q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-520H440v520q0 17-11.5 28.5T400-160Z" />
  </svg>
)

export { IconFormatParagraphRounded as default }
