import React from 'react'
import { IconProps } from './types.js'

export const IconNoDrinksRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M592-482 394-680h268l72-80H314l-80-80h543q27 0 44 18.5t17 41.5q0 11-4 21t-12 19L592-482ZM280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h160v-207L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 12 28t-12 28q-12 12-28.5 12T763-84L521-326l-1 126h160q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z" />
  </svg>
)
