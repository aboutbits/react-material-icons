import React from 'react'
import { IconProps } from './types'

export const IconCookieOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-360q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-91-91q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-90-89q-48 32-103.5 49T480-80Zm280-562q-2 44 24.5 78t64.5 39q13 2 22 11.5t9 22.5q0 44-8 86.5T847-321q-5 12-15 19t-21 9q-11 2-22.5-1.5T767-308L310-765q-10-10-13.5-22t-1.5-24q2-12 9-22t19-15q45-18 93.5-24.5T513-879q19 0 33 12t14 31q0 61 48 110.5T719-682q17-2 29.5 10.5T760-642Z" />
  </svg>
)
