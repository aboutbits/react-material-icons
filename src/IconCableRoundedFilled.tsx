import React from 'react'
import { IconProps } from './types.js'

export const IconCableRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-11-11-25.5-17.5T120-240v-120q0-17 11.5-28.5T160-400h40v-280q0-66 47-113t113-47q66 0 113 47t47 113v400q0 33 23.5 56.5T600-200q33 0 56.5-23.5T680-280v-280h-40q-17 0-28.5-11.5T600-600v-120q0-16 14.5-22.5T640-760v-40q0-17 11.5-28.5T680-840h80q17 0 28.5 11.5T800-800v40q11 11 25.5 17.5T840-720v120q0 17-11.5 28.5T800-560h-40v280q0 66-47 113t-113 47q-66 0-113-47t-47-113v-400q0-33-23.5-56.5T360-760q-33 0-56.5 23.5T280-680v280h40q17 0 28.5 11.5T360-360v120q0 16-14.5 22.5T320-200v40q0 17-11.5 28.5T280-120h-80Z" />
  </svg>
)