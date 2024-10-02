import React from 'react'
import { IconProps } from './types'

export const IconFlashlightOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160v-368L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L640-208v48q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160Zm-6-600-68-68q8-23 28-37.5t46-14.5h320q33 0 56.5 23.5T720-800v40H314Zm326 326L394-680h326v16q0 12-3 23t-10 21l-67 100v86Z" />
  </svg>
)
