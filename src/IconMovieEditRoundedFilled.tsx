import React from 'react'
import { IconProps } from './types'

export const IconMovieEditRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-720v138q0 12-10 19t-22 4q-33-6-65.5 3.5T724-520L503-299q-11 11-17 25.5t-6 30.5v43q0 17-11.5 28.5T440-160H160Zm400 0v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L695-132q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T560-160Zm263-184 37-39-37-37-38 38 38 38Z" />
  </svg>
)
