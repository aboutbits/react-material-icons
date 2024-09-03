import React from 'react'
import { IconProps } from './types'

const IconSignalWifiStatusbarNotConnectedOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-40 40q-28-36-69.5-58T760-640q-83 0-141.5 58.5T560-440q0 49 22 90.5t58 69.5L480-120Zm280-40q-17 0-29.5-12.5T718-202q0-17 12.5-29.5T760-244q17 0 29.5 12.5T802-202q0 17-12.5 29.5T760-160Zm-30-128q0-38 10-59t43-54q21-21 27-31.5t6-26.5q0-18-14-31.5T765-504q-21 0-39 13.5T700-454l-54-22q12-38 44-61t75-23q49 0 80 29t31 74q0 23-10 41t-38 46q-24 24-30 38.5t-6 43.5h-62Z" />
  </svg>
)

export { IconSignalWifiStatusbarNotConnectedOutlined as default }