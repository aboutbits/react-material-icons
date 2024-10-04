import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsEthernetRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M806-480 652-636q-11-11-11.5-27.5T652-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-268q-11 11-27.5 11.5T652-268q-11-11-11-28t11-28l154-156Zm-652 0 154 156q11 11 11.5 27.5T308-268q-11 11-28 11t-28-11L68-452q-6-6-8.5-13T57-480q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T308-692q11 11 11 28t-11 28L154-480Zm166 40q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm160 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440Z" />
  </svg>
)
