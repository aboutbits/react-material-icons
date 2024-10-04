import React from 'react'
import { IconProps } from './types.js'

export const IconSurroundSoundRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120q0 30-8 58t-25 53q-9 14-8.5 31t11.5 28q12 12 28 11.5t26-13.5q27-36 41.5-79t14.5-89q0-46-14.5-89T704-648q-10-13-26-13.5T650-650q-11 11-11.5 28t8.5 31q17 25 25 53t8 58Zm-400 0q0-30 8-58t25-53q9-14 8.5-31T310-650q-12-12-28-11.5T256-648q-27 36-41.5 79T200-480q0 46 14.5 89t41.5 79q10 13 26 13.5t28-11.5q11-11 11.5-28t-8.5-31q-17-25-25-53t-8-58ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)