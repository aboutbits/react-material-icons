import React from 'react'
import { IconProps } from './types'

const IconCallSplitRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-664v64q0 17-11.5 28.5T200-560q-17 0-28.5-11.5T160-600v-160q0-17 11.5-28.5T200-800h160q17 0 28.5 11.5T400-760q0 17-11.5 28.5T360-720h-64l201 201q11 11 17 25.5t6 30.5v263q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-264L240-664Zm480 0-98 99q-12 12-28.5 12T565-565q-12-12-12-29t12-29l99-97h-64q-17 0-28.5-11.5T560-760q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760v160q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600v-64Z" />
  </svg>
)

export { IconCallSplitRounded as default }
