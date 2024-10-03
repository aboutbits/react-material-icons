import React from 'react'
import { IconProps } from './types.js'

export const IconNoPhotographyRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-57-64-63H160q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h41v114L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm64-198q-11 5-22 3t-21-12L659-417q5-42-8.5-81.5T607-568q-29-29-68.5-42.5T457-619L327-748q-6-6-8.5-13t-2.5-15q0-8 2.5-14.5T326-803l10-11q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v388q0 14-7 23t-18 14Zm-375-5q23 0 44.5-5t41.5-16L321-526q-11 20-16 41.5t-5 44.5q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-20 7.5-38.5T409-511l142 142q-14 14-32.5 21.5T480-340Z" />
  </svg>
)
