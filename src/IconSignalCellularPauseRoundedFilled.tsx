import React from 'react'
import { IconProps } from './types'

const IconSignalCellularPauseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m148-148 664-664q19-19 43.5-8.5T880-783v303q0 17-11.5 28.5T840-440H640q-50 0-85 35t-35 85v200q0 17-11.5 28.5T480-80H177q-27 0-37.5-24.5T148-148Zm612 28v-200q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v200q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120Zm-160 0v-200q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320v200q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120Z" />
  </svg>
)

export { IconSignalCellularPauseRoundedFilled as default }
