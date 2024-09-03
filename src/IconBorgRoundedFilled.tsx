import React from 'react'
import { IconProps } from './types'

const IconBorgRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-91 160-252q-19-11-29.5-29.5T120-322v-118h200v80q0 17 11.5 28.5T360-320h80v229ZM120-520v-118q0-22 10.5-40.5T160-708l280-161v229h-80q-17 0-28.5 11.5T320-600v80H120Zm280 120v-160h160v160H400ZM520-91v-229h80q17 0 28.5-11.5T640-360v-80h200v118q0 22-10.5 40.5T800-252L520-91Zm120-429v-80q0-17-11.5-28.5T600-640h-80v-229l280 161q19 11 29.5 29.5T840-638v118H640Z" />
  </svg>
)

export { IconBorgRoundedFilled as default }
