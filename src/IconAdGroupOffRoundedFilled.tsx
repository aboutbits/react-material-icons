import React from 'react'
import { IconProps } from './types'

export const IconAdGroupOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-33 0-56.5-23.5T240-320v-288L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm668-165L387-686q-10-10-5-22t19-12h399v-80l-479-24q-19-1-23.5-19t15.5-32q3-2 7-3.5t8-1.5h472q33 0 56.5 23.5T880-800v480q0 26-14 46.5T828-245Z" />
  </svg>
)
