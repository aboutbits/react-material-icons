import React from 'react'
import { IconProps } from './types'

const IconLineEndArrowNotchRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z" />
  </svg>
)

export { IconLineEndArrowNotchRounded as default }
