import React from 'react'
import { IconProps } from './types'

export const IconBorgSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-275v-410l360-207 360 207v410L480-68 120-275Zm200-45v-120H200v118l240 139v-137H320Zm0-320h120v-137L200-638v118h120v-120Zm80 240h160v-160H400v160Zm240 80H520v137l240-139v-118H640v120Zm0-320v120h120v-118L520-777v137h120Z" />
  </svg>
)
