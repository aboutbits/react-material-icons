import React from 'react'
import { IconProps } from './types'

const IconWifiCallingBar3Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-521q-17 0-28.5-11.5T620-561q0-17 11.5-28.5T660-601q17 0 28.5 11.5T700-561q0 17-11.5 28.5T660-521Zm-100-98-42-42q29-29 65.5-44.5T660-721q40 0 76.5 15.5T802-661l-42 42q-20-20-45.5-31T660-661q-29 0-54.5 11T560-619Zm-84-86-42-42q45-45 103.5-69.5T660-841q64 0 122.5 24.5T886-747l-42 42q-37-37-84.5-56.5T660-781q-52 0-99 20t-85 56Zm322 585q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
  </svg>
)

export { IconWifiCallingBar3Outlined as default }