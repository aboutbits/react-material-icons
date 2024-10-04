import React from 'react'
import { IconProps } from './types'

const IconFlightTakeoffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M808-487 248-336q-26 7-50.5-3T159-372L68-524q-11-17-3.5-36T92-584l23-6q10-2 19.5-.5T152-582l96 80 140-37-163-218q-16-21-8-45.5t34-31.5l21-5q11-3 23.5-1t21.5 10l279 235 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z" />
  </svg>
)

export { IconFlightTakeoffRounded as default }
