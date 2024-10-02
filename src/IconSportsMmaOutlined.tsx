import React from 'react'
import { IconProps } from './types'

export const IconSportsMmaOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120q-17 0-28.5-11.5T280-160v-120h400v120q0 17-11.5 28.5T640-120H320Zm440-520v120q0 3-2 8l-30 152q-3 18-16.5 29T680-320H280q-18 0-31.5-11T232-360l-30-152q-2-5-2-8v-240q0-33 23.5-56.5T280-840h320q33 0 56.5 23.5T680-760v120q0-17 11.5-28.5T720-680q17 0 28.5 11.5T760-640ZM306-400h348l26-136v-24h-80v-200H280v224l26 136Zm14-160h240v-120H320v120Zm160-20Z" />
  </svg>
)
