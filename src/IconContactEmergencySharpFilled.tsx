import React from 'react'
import { IconProps } from './types'

export const IconContactEmergencySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-120v-720h960v720H0Zm360-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Zm606-280h60v-68l59 34 30-52-59-34 59-34-30-52-59 34v-68h-60v68l-59-34-30 52 59 34-59 34 30 52 59-34v68Z" />
  </svg>
)
