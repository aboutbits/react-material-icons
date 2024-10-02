import React from 'react'
import { IconProps } from './types'

export const IconMonitoringRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160v-40q0-17 11.5-28.5T160-240q17 0 28.5 11.5T200-200v40q0 17-11.5 28.5T160-120Zm160 0q-17 0-28.5-11.5T280-160v-220q0-17 11.5-28.5T320-420q17 0 28.5 11.5T360-380v220q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160v-140q0-17 11.5-28.5T480-340q17 0 28.5 11.5T520-300v140q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160v-200q0-17 11.5-28.5T640-400q17 0 28.5 11.5T680-360v200q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160v-360q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v360q0 17-11.5 28.5T800-120ZM560-481q-16 0-30.5-6T503-504L400-607 188-395q-12 12-28.5 11.5T131-396q-11-12-10.5-28.5T132-452l211-211q12-12 26.5-17.5T400-686q16 0 31 5.5t26 17.5l103 103 212-212q12-12 28.5-11.5T829-771q11 12 10.5 28.5T828-715L617-504q-11 11-26 17t-31 6Z" />
  </svg>
)
