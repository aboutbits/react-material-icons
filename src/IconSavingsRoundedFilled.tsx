import React from 'react'
import { IconProps } from './types.js'

export const IconSavingsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M237-120q-23 0-44.5-16T164-175q-25-84-41-145.5t-25.5-108Q88-475 84-511t-4-69q0-92 64-156t156-64h200q27-36 68.5-58t91.5-22q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22t-5.5 24l91 91h47q17 0 28.5 11.5T880-620v210q0 13-7.5 23T852-372l-85 28-50 167q-8 26-29 41.5T640-120h-80q-33 0-56.5-23.5T480-200h-80q0 33-23.5 56.5T320-120h-83Zm403-400q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-160-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680H360q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600h120Z" />
  </svg>
)
