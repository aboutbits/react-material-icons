import React from 'react'
import { IconProps } from './types.js'

export const IconBorgOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-91 160-252q-19-11-29.5-29.5T120-322v-118h200v120h120v229ZM120-520v-118q0-22 10.5-40.5T160-708l280-161v229H320v120H120Zm280 120v-160h160v160H400ZM520-91v-229h120v-120h200v118q0 22-10.5 40.5T800-252L520-91Zm120-429v-120H520v-229l280 161q19 11 29.5 29.5T840-638v118H640Z" />
  </svg>
)
