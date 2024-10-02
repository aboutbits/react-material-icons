import React from 'react'
import { IconProps } from './types'

export const IconRheumatologySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-174l-83-84q-16-17-25-37.5T161-417q23 27 55.5 42t68.5 15q31 0 58.5-11t56.5-35q2-2 5-4t5-3q2 1 5.5 3t5.5 4q29 24 56.5 35t57.5 11q37 0 69.5-15t55.5-42q-2 22-11 42.5T624-338l-84 84v174H280Zm5-320q-52 0-88.5-36.5T160-525q0-26 10-48.5t27-39.5l83-84v-183h260v182l84 84q17 17 26.5 40t9.5 49q0 52-36 88.5T535-400q-33 0-53.5-12.5T447-437q-15-12-23.5-14.5T410-454q-9 0-18.5 6T374-437q-14 12-34.5 24.5T285-400Zm621 129-195-64 26-77 195 65-26 76Zm14-169H735v-80h185v80Zm11-175-196 66-24-77 196-65 24 76Z" />
  </svg>
)
