import React from 'react'
import { IconProps } from './types.js'

export const IconShieldMoonSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M501-320q38 0 74.5-16t63.5-48q7-8 3-18t-14-12q-38-6-72-28.5T501-502q-20-35-23.5-75.5T488-656q4-10-2.5-18t-17.5-6q-69 13-109 65t-40 115q0 75 53.5 127.5T501-320ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z" />
  </svg>
)