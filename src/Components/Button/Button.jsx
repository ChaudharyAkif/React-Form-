
import styles from "./Button.module.css";

 const {outline_btn,primary_btn} = styles
const Button = ({isOutline,icon,text,...rest}) => {

    // console.log(props)
  return (
   <button {...rest} className={ isOutline ? outline_btn : primary_btn}>
{icon}
{text}
    </button>
  )
}

export default Button
