import React from 'react'
import { IconProps } from './types.js'

export const IconBedroomBabyRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240q70 0 135.5-24T735-333q11-9 12-22t-8-22q-9-9-21.5-8.5T695-377q-5 5-10.5 8t-10.5 7l-34-58v-100h20q8 0 14-6t6-14q0-8-6-14t-14-6H456l-58-100q-5-9-14.5-14.5T363-680h-93q-8 0-10 6.5t4 11.5l16 12-44 51q-7 8-7 18.5t8 18.5l6 6q7 7 16.5 8t17.5-4l43-28v160l-34 58-12-8q-6-4-11-9-9-8-21.5-7t-20.5 9q-9 9-8.5 21.5T223-335q54 46 120 70.5T480-240Zm0-60q-38 0-73.5-7.5T338-332l34-58q26 10 53.5 14.5T480-371q28 0 55-4.5t53-14.5l34 58q-33 15-68.5 23.5T480-300ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z" />
  </svg>
)