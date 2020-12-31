import { CLASS } from "../../../types/classes.types"
import { Li } from "./listItem.styles"

type Props = {
  charClass: CLASS

}

export default function ListItem(props: Props) {
  const { charClass } = props
  return (
    <Li charClass={charClass}>{charClass}</Li>
  )
}
