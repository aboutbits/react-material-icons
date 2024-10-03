import React from 'react'
import { IconProps } from './types.js'

export const IconSpeedCameraRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m678-373-37-21q-9-5-10-16t8-18l94-70q10-8 21.5-8.5T777-501l37 21q9 5 9.5 16t-7.5 18l-94 70q-10 8-21.5 8.5T678-373ZM512-482l104-79-276-159-60 104 232 134Zm-64-119ZM200-160q-17 0-28.5-11.5T160-200q0-17 11.5-28.5T200-240h160v-238l-120-69q-29-17-37.5-48.5T211-656l60-104q17-29 48.5-37.5T380-789l329 189q19 11 20 32.5T713-533L559-418q-20 14-43 15.5T472-413l-32-18v191q0 33-23.5 56.5T360-160H200Z" />
  </svg>
)
