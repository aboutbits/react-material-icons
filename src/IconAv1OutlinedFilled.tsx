import React from 'react'
import { IconProps } from './types'

const IconAv1OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm60-200h60v-60h60v60h60v-200q0-17-11.5-28.5T320-600H220q-17 0-28.5 11.5T180-560v200Zm60-120v-60h60v60h-60Zm230 120h60l70-240h-60l-40 137-40-137h-60l70 240Zm250 0h60v-240H660v60h60v180Z" />
  </svg>
)

export { IconAv1OutlinedFilled as default }
