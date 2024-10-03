import React from 'react'
import { IconProps } from './types.js'

export const IconBikeScooterOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-200v-80h164q11-68 56.5-119T332-470l-58-250H120v-80h154q27 0 49.5 17.5T352-738l78 338h-30q-66 0-113 47t-47 113v40H0Zm400 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm360-120q-72 0-126.5-44.5T564-400h-94l-18-80h112q5-23 13.5-43t22.5-37H434l-18-80h226l-44-120H494v-80h104q26 0 46.5 14t29.5 38l54 146h32q83 0 141.5 58.5T960-442q0 85-58.5 143.5T760-240Zm-40-186 76-28-40-106-74 28 38 106Z" />
  </svg>
)
