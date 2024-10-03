import React from 'react'
import { IconProps } from './types.js'

export const IconConnectWithoutContactRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-17 0-28.5-11.5T640-120v-50q-39-13-70-39.5T521-273q-8-15 0-30t24-22q14-6 28 1t22 21q16 29 44 46t61 17h120q25 0 42.5 17.5T880-180v60q0 17-11.5 28.5T840-80H680Zm80-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM120-520q-17 0-28.5-11.5T80-560v-60q0-25 17.5-42.5T140-680h120q33 0 61-17t44-46q8-14 22-22.5t29-3.5q17 5 26 19t3 29q-17 41-50 69t-75 42v50q0 17-11.5 28.5T280-520H120Zm80-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Zm200 320q-17 0-28.5-11.5T360-440q0-134 93-227t227-93q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680q-100 0-170 70t-70 170q0 17-11.5 28.5T400-400Zm160 0q-17 0-28.5-11.5T520-440q0-66 47-113t113-47q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520q-33 0-56.5 23.5T600-440q0 17-11.5 28.5T560-400Z" />
  </svg>
)
