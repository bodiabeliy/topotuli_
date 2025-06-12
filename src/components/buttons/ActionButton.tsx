import { BtnProps } from '@/types'

export const ActionButton = (props: BtnProps) => {
  const {onClick, disabled} = props
  return (
    <>
        <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={` ${props.className} `}
    >
      {props.text}
    </button>

    </>
  )
}
