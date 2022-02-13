import '../styles/components/Button.css'

interface ButtonProps {
  text: string
  onClick(): void
}

function Button(props: ButtonProps) {
  return (
    <button
      className="btn"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default Button
