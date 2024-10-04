import React from 'react'
import { IconProps } from './types'

const IconSocialDistanceRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m232-240 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-252q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h496l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L748-148q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36H232ZM80-520v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H80Zm480 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H560ZM240-680q-33 0-56.5-23.5T160-760q0-33 23.5-56.5T240-840q33 0 56.5 23.5T320-760q0 33-23.5 56.5T240-680Zm480 0q-33 0-56.5-23.5T640-760q0-33 23.5-56.5T720-840q33 0 56.5 23.5T800-760q0 33-23.5 56.5T720-680Z" />
  </svg>
)

export { IconSocialDistanceRoundedFilled as default }
