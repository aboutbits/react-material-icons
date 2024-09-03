import React from 'react'
import { IconProps } from './types'

const IconScooterRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-240q17 0 28.5-11.5T800-280q0-17-11.5-28.5T760-320q-17 0-28.5 11.5T720-280q0 17 11.5 28.5T760-240Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-560-80q17 0 28.5-11.5T240-280q0-17-11.5-28.5T200-320q-17 0-28.5 11.5T160-280q0 17 11.5 28.5T200-240Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 70 22.5t43 57.5h211q11-68 56.5-119T692-510l-56-250H520q-17 0-28.5-11.5T480-800q0-17 11.5-28.5T520-840h116q28 0 50 17t28 45l66 293q4 17-7 30.5T744-439q-63 5-102.5 51.5T600-278q0 16-11 27t-27 11H313q-12 35-43 57.5T200-160Z" />
  </svg>
)

export { IconScooterRounded as default }