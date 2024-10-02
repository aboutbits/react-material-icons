import React from 'react'
import { IconProps } from './types'

export const IconDecimalIncreaseRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M727-200H520q-17 0-28.5-11.5T480-240q0-17 11.5-28.5T520-280h207l-35-35q-11-12-11.5-28.5T692-372q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748-108q-12 12-28 12t-28-12q-12-12-11.5-28.5T692-165l35-35ZM160-440h-40q-17 0-28.5-11.5T80-480v-40q0-17 11.5-28.5T120-560h40q17 0 28.5 11.5T200-520v40q0 17-11.5 28.5T160-440Zm220 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm360 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm-360-80q25 0 42.5-17.5T440-580v-160q0-25-17.5-42.5T380-800q-25 0-42.5 17.5T320-740v160q0 25 17.5 42.5T380-520Zm360 0q25 0 42.5-17.5T800-580v-160q0-25-17.5-42.5T740-800q-25 0-42.5 17.5T680-740v160q0 25 17.5 42.5T740-520Z" />
  </svg>
)
