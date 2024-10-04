import React from 'react'
import { IconProps } from './types'

const IconSettingsPowerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-480v-400h80v400h-80Zm40 280q-134 0-227-93t-93-227q0-79 36.5-148T298-782l58 58q-54 32-85 86.5T240-520q0 100 70 170t170 70q100 0 170-70t70-170q0-63-31-117.5T604-724l58-58q65 45 101.5 114T800-520q0 134-93 227t-227 93ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z" />
  </svg>
)

export { IconSettingsPowerSharpFilled as default }
