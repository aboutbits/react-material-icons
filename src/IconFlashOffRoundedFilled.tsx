import React from 'react'
import { IconProps } from './types'

const IconFlashOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M609-465 298-776q-9-9-13-18.5t-4-20.5q0-25 20-45t49-20h244q32 0 51.5 25t11.5 55l-57 200h45q37 0 53.5 32t-3.5 62l-25 36q-11 15-29 17t-32-12ZM763-84 550-296l-95 137q-5 8-14.5 11.5t-19.5.5q-10-3-15.5-11t-5.5-18v-224h-40q-33 0-56.5-23.5T280-480v-86L83-763q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Z" />
  </svg>
)

export { IconFlashOffRoundedFilled as default }
