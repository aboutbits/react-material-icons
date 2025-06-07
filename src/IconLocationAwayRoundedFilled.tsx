import React from 'react'
import { IconProps } from './types.js'

export const IconLocationAwayRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120H160q-33 0-56.5-23.5T80-200v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l132 100q10 8 7.5 20T572-668q-39 14-69 42.5T456-559q-17 38-16.5 79.5T457-400q5 13 .5 25.5T441-357q-42 19-64 37t-36 44q-11 18-16 38.5t-5 41.5v36q0 17-11.5 28.5T280-120Zm360-200q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196q0 32-22 54t-54 22H476q-32 0-54-22t-22-54q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320Zm0-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)
