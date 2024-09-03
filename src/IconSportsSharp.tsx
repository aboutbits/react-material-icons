import React from 'react'
import { IconProps } from './types'

const IconSportsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200q-100 0-170-70t-70-170q0-11 1-22t3-22q-5 2-12 3t-12 1q-42 0-71-29t-29-71q0-42 27.5-71t69.5-29q33 0 59.5 18.5T274-614q33-30 75.5-48t90.5-18h440v160H680v80q0 100-70 170t-170 70ZM180-540q17 0 28.5-11.5T220-580q0-17-11.5-28.5T180-620q-17 0-28.5 11.5T140-580q0 17 11.5 28.5T180-540Zm260 240q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-60q33 0 56.5-23.5T520-440q0-33-23.5-56.5T440-520q-33 0-56.5 23.5T360-440q0 33 23.5 56.5T440-360Zm0-80Z" />
  </svg>
)

export { IconSportsSharp as default }
