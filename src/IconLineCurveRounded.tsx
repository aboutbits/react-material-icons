import React from 'react'
import { IconProps } from './types'

const IconLineCurveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-160q-17 0-28.5-13T718-204q-8-103-50.5-193t-111-158.5Q488-624 398-667t-192-51q-18-2-32-13.5T160-760q0-17 12.5-28.5T202-799q120 8 225.5 57.5T613-612q80 80 129.5 186T799-200q1 17-10.5 28.5T760-160Z" />
  </svg>
)

export { IconLineCurveRounded as default }
