import React from 'react'
import { IconProps } from './types.js'

export const IconModeFanOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-424q0 51-32 77.5T777-320q-6 0-12-.5t-12-2.5L324-752q13-54 66.5-91T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149ZM819-28 637-211q-13 54-66.5 92.5T424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q8 0 16.5 1t16.5 3L27-820l57-57L876-85l-57 57Z" />
  </svg>
)
