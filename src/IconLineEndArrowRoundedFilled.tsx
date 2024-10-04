import React from 'react'
import { IconProps } from './types'

const IconLineEndArrowRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Z" />
  </svg>
)

export { IconLineEndArrowRoundedFilled as default }
