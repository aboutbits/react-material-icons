import React from 'react'
import { IconProps } from './types.js'

export const IconElectricMopedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-760v134L580-400H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-400h-80q0 17 11.5 28.5T280-360Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-400q0-17-11.5-28.5T760-440q-17 0-28.5 11.5T720-400q0 17 11.5 28.5T760-360ZM520-40 280-160h160v-80l240 120H520v80Z" />
  </svg>
)