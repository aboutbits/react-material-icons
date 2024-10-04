import React from 'react'
import { IconProps } from './types.js'

export const IconSkilletCooktopRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360q-50 0-85-35t-35-85v-120q0-17 11.5-28.5T160-640h481q5-33 27-59t54-37l147-49q16-5 31 2t20 23q5 16-2.5 31T894-709l-147 49q-12 4-19.5 14.5T720-622v142q0 50-35 85t-85 35H240Zm120 200v-80H120q-17 0-28.5-11.5T80-280q0-17 11.5-28.5T120-320h240q33 0 56.5 23.5T440-240v80q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160Zm160 0v-80q0-33 23.5-56.5T600-320h240q17 0 28.5 11.5T880-280q0 17-11.5 28.5T840-240H600v80q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160Z" />
  </svg>
)
