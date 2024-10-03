import React from 'react'
import { IconProps } from './types.js'

export const IconTireRepairSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-640q-17 0-28.5-11.5T720-680q0-8 3-15t9-13q12-12 55-27l43-15q-8 23-15 43-6 17-13.5 33T788-652q-6 6-13 9t-15 3ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v320h160v240h80v-240h-40v-57q-55-24-87.5-73.5T560-680q0-83 58.5-141.5T760-880q83 0 141.5 58.5T960-680q0 60-32.5 109.5T840-497v57h-40v320H560v-240h-80v160q0 33-23.5 56.5T400-120H160Zm600-440q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-200h240v-80l-80 80v-113l80-80v-87l-80 80v-113l80-80v-87l-80 80v-113l47-47H193l47 47v113l-80-80v87l80 80v113l-80-80v87l80 80v113l-80-80v80Zm120-280Z" />
  </svg>
)
