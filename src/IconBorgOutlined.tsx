import React from 'react'
import { IconProps } from './types'

const IconBorgOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-11 0-21-3t-19-8L160-252q-19-11-29.5-29.5T120-322v-316q0-22 10.5-40.5T160-708l280-161q9-5 19-8t21-3q11 0 21 3t19 8l280 161q19 11 29.5 29.5T840-638v316q0 22-10.5 40.5T800-252L520-91q-9 5-19 8t-21 3ZM320-320v-120H200v118l240 139v-137H320Zm0-320h120v-137L200-638v118h120v-120Zm80 240h160v-160H400v160Zm240 80H520v137l240-139v-118H640v120Zm0-320v120h120v-118L520-777v137h120Z" />
  </svg>
)

export { IconBorgOutlined as default }