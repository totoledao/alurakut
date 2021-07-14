import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



function ProfileSidebar(props) {
  return (
    <Box>
          <img src={`https://github.com/${props.githubUser}.png`} alt="Profile Picture"
            style={{borderRadius: 8}}
          />
    </Box>
  )  
}

export default function Home() {  

  const githubUser = 'totoledao';
  const pessoasFavoritas = [
    'aa',
    'bbb',
  ]

  return (
    <>

      <AlurakutMenu />

      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}> 
          <ProfileSidebar githubUser={githubUser} />
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
             Bem vindo
            </h1>        

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2> 

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/user/${item}`} key={item} >
                      <img src={`https://github.com/${item}.png`} alt="Profile Picture" />
                      <span>{item}</span>
                    </a>
                  </li>
                )})}
            </ul>

          </ProfileRelationsBoxWrapper>

          <Box >
            Comunidades
          </Box>
        </div>

      </MainGrid>

    </>
  )
}
