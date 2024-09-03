import React from 'react'
import { IconProps } from './types'

const IconShareReviewsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-360q33 0 56.5-23.5T660-440q0-33-23.5-56.5T580-520q-15 0-28.5 5.5T527-500l-107-54v-12l107-54q11 9 24.5 14.5T580-600q33 0 56.5-23.5T660-680q0-33-23.5-56.5T580-760q-33 0-56.5 23.5T500-680v6l-107 54q-11-9-24.5-14.5T340-640q-33 0-56.5 23.5T260-560q0 33 23.5 56.5T340-480q15 0 28.5-5.5T393-500l107 54v6q0 33 23.5 56.5T580-360ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
  </svg>
)

export { IconShareReviewsRounded as default }