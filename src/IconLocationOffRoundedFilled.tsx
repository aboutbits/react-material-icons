import React from 'react'
import { IconProps } from './types'

const IconLocationOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-32 5-61t14-55L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28.5T848-56q-12 12-28.5 12T791-56L627-220q-25 26-50 51.5T533-127q-11 10-25 15t-28 5Zm0-773q127 0 223.5 89T800-552q0 35-10 72.5T760-402q-11 22-35.5 24.5T683-392L551-524q5-8 7-17t2-19q0-17-6-31.5T537-617q-11-11-25.5-17t-31.5-6q-10 0-19 2t-17 7L315-760q-18-18-15.5-42.5T323-840q35-20 75-30t82-10Z" />
  </svg>
)

export { IconLocationOffRoundedFilled as default }
