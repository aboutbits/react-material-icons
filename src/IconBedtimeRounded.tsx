import React from 'react'
import { IconProps } from './types.js'

export const IconBedtimeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-128 72-232t193-146q22-8 41 5.5t18 36.5q-3 85 27 162t90 137q60 60 137 90t162 27q26-1 38.5 17.5T863-345q-44 120-147.5 192.5T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
  </svg>
)
