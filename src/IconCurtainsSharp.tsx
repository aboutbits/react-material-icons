import React from 'react'
import { IconProps } from './types'

export const IconCurtainsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h158q-8-70-46-141.5T240-434v234Zm0-560v234q74-21 112-92.5T398-760H240Zm89 280q68 45 105 123t44 157h4q7-79 44-157t105-123q-68-45-105-123t-44-157h-4q-7 79-44 157T329-480Zm391-280H562q8 70 46 141.5T720-526v-234Zm0 560v-234q-74 21-111.5 92.5T563-200h157ZM240-760v234-234Zm480 0v234-234Zm0 560v-234 234Zm-480 0v-234 234Z" />
  </svg>
)
