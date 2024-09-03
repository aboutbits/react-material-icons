import React from 'react'
import { IconProps } from './types'

const IconRebaseEditOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-164l294-292q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l49 50q11 12 17 26.5t6 29.5q0 15-6.5 29.5T856-374L564-80H400Zm397-348-50-49 50 49ZM480-160h50l162-162-25-25-25-25-162 162v50Zm187-187-25-25 25 25 25 25-25-25ZM430-590l-56-57 73-73H313q-9 26-28 45t-45 28v334q35 13 57.5 43.5T320-200q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-69t57.5-43v-335q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h134l-73-73 56-57 170 170-170 170Zm330-290q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-50 35-85t85-35ZM200-160q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-560q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM200-200Zm0-560Zm560 0Z" />
  </svg>
)

export { IconRebaseEditOutlined as default }