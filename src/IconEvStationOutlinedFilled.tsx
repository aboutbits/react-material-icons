import React from 'react'
import { IconProps } from './types'

export const IconEvStationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-560h240v-200H240v200Zm-80 440v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h50q29 0 49.5 20.5T680-410v185q0 17 14 31t31 14q18 0 31.5-14t13.5-31v-375h-10q-17 0-28.5-11.5T720-640v-80h20v-60h40v60h40v-60h40v60h20v80q0 17-11.5 28.5T840-600h-10v375q0 42-30.5 73.5T725-120q-43 0-74-31.5T620-225v-185q0-5-2.5-7.5T610-420h-50v300H160Zm180-80 100-160h-60v-120L280-320h60v120Z" />
  </svg>
)
