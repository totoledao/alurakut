import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export default function ProfileRelationsBox(props) {

  return (

    <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              props.fieldName ({props.items.length})
            </h2> 

            <ul>
              {props.items.map((item) => {
                return (
                  <li id={`item${Math.random().toString()}`}>
                    <a href={`/user/${item}`} >
                      <img src={`https://github.com/${item}.png`} alt="Profile Picture" />
                      <span>{item}</span>
                    </a>
                  </li>
                )})}
            </ul>
          </ProfileRelationsBoxWrapper>

  )
  
}