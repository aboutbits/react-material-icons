import React from 'react'
import { IconProps } from './types'

const IconPrecisionManufacturingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-80h59l13 16 89-84 208 98-24 52-171-78-94 88v56l94 86 173-78 24 52-210 100-89-84-16 16h-56v-80H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z" />
  </svg>
)

export { IconPrecisionManufacturingSharp as default }
