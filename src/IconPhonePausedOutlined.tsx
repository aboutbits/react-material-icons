import React from 'react'
import { IconProps } from './types'

const IconPhonePausedOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-560v-280h80v280h-80Zm160 0v-280h80v280h-80Zm38 440q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T120-798q0-18 12-30t30-12h162q14 0 25 9t13 23l26 140q2 14-.5 25.5T376-622l-97 98q42 72 105.5 135T524-280l94-94q9-9 23.5-13.5T670-390l138 28q14 3 23 13.5t9 24.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
  </svg>
)

export { IconPhonePausedOutlined as default }
