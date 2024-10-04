import React from 'react'
import { IconProps } from './types'

const IconToolsPhillipsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200h320q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120H320Zm0-120q-17 0-28.5-11.5T280-280v-333q0-13 4-25t12-23l122-163q6-8 14-12t18-4h60q10 0 18 4t14 12l122 163q8 11 12 23t4 25v333q0 17-11.5 28.5T640-240H320Zm40-280 80-80v-120l-80 107v93Zm240 0v-93l-80-107v120l80 80Z" />
  </svg>
)

export { IconToolsPhillipsRoundedFilled as default }
