import React from 'react'
import { IconProps } from './types.js'

export const IconDeckRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-480H143q-15 0-19-14t8-22l325-228q11-8 23-8t23 8l325 228q12 8 8 22t-19 14H520v480q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Zm-320 0v-170L95-427q-3-17 6-30t26-16q16-3 29.5 6.5T173-441l23 121h124q17 0 28.5 11.5T360-280v160q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-120h-80v120q0 17-11.5 28.5T160-80q-17 0-28.5-11.5T120-120Zm480 0v-160q0-17 11.5-28.5T640-320h124l23-121q3-16 16-25.5t30-6.5q17 3 26 16t6 30l-25 137v170q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-120h-80v120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120Z" />
  </svg>
)