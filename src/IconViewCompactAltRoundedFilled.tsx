import React from 'react'
import { IconProps } from './types.js'

export const IconViewCompactAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-300h80q17 0 28.5-11.5T460-340v-80q0-17-11.5-28.5T420-460h-80q-17 0-28.5 11.5T300-420v80q0 17 11.5 28.5T340-300Zm0-200h80q17 0 28.5-11.5T460-540v-80q0-17-11.5-28.5T420-660h-80q-17 0-28.5 11.5T300-620v80q0 17 11.5 28.5T340-500Zm200 200h80q17 0 28.5-11.5T660-340v-80q0-17-11.5-28.5T620-460h-80q-17 0-28.5 11.5T500-420v80q0 17 11.5 28.5T540-300Zm0-200h80q17 0 28.5-11.5T660-540v-80q0-17-11.5-28.5T620-660h-80q-17 0-28.5 11.5T500-620v80q0 17 11.5 28.5T540-500ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)