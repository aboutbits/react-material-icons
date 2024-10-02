import React from 'react'
import { IconProps } from './types'

export const IconForwardToInboxRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-720H160v480h320q17 0 28.5 11.5T520-200q0 17-11.5 28.5T480-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440q-17 0-28.5-11.5T800-480v-240Zm-640 0v480-200 3-283Zm320 200 320-200v80L501-453q-10 6-21 6t-21-6L160-640v-80l320 200Zm287 360H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h127l-36-36q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l104 104q6 6 9 13t3 15q0 8-3 15t-9 13L788-68q-11 11-27.5 11.5T732-68q-11-11-11-28t11-28l35-36Z" />
  </svg>
)
