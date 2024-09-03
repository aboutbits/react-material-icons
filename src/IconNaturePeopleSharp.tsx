import React from 'react'
import { IconProps } from './types'

const IconNaturePeopleSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-520q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM120-80v-200H80v-200h200v200h-40v120h320v-200h-70q-71 0-120.5-49.5T320-530q0-53 28.5-94.5T422-686q11-65 60.5-109.5T600-840q68 0 117.5 44.5T778-686q45 20 73.5 61.5T880-530q0 71-49.5 120.5T710-360h-70v200h200v80H120Zm370-360h220q38 0 64-26t26-64q0-27-14.5-49T746-612l-42-18-6-44q-6-37-33.5-61.5T600-760q-37 0-64.5 24.5T502-674l-6 44-42 18q-25 11-39.5 33T400-530q0 38 26 64t64 26Zm110-160Z" />
  </svg>
)

export { IconNaturePeopleSharp as default }
