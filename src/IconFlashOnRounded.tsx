import React from 'react'
import { IconProps } from './types'

const IconFlashOnRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-336 128-184H494l80-280H360v320h120v144Zm215-170L455-159q-6 9-15.5 12t-18.5 0q-9-3-15-10.5t-6-18.5v-224h-40q-33 0-56.5-23.5T280-480v-320q0-33 23.5-56.5T360-880h234q32 0 51.5 25t11.5 55l-57 200h45q36 0 53.5 32t-3.5 62Zm-215 26H360h120Z" />
  </svg>
)

export { IconFlashOnRounded as default }
