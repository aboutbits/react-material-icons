import React from 'react'
import { IconProps } from './types'

export const IconNaturePeopleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-520q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Zm60 360h320v-200h-70q-71 0-120.5-49.5T320-530q0-53 28.5-94.5T422-686q11-65 60.5-109.5T600-840q68 0 117.5 44.5T778-686q45 20 73.5 61.5T880-530q0 71-49.5 120.5T710-360h-70v200h160q17 0 28.5 11.5T840-120q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-160q-11-11-25.5-17.5T80-320v-120q0-17 11.5-28.5T120-480h120q17 0 28.5 11.5T280-440v120q0 16-14.5 22.5T240-280v120Z" />
  </svg>
)
