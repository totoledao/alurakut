import React from 'react';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



function ProfileSidebar(props) {
  return (
    <Box as='aside'>
          <img src={`https://github.com/${props.githubUser}.png`} alt="Profile Picture"
            style={{borderRadius: 8}}
          />
          <hr />

          <p>
            <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
              @{props.githubUser}
            </a>
          </p>

          <hr />

          <AlurakutProfileSidebarMenuDefault />
    </Box>
  )  
}

export default function Home() {

  const [comunidades, setComunidades] = React.useState([{
    id: '155464f4df4g4we8e49q48e12912ew659',
    title: 'My Community',
    image: 'https://picsum.photos/300'
  }]);

  const githubUser = 'totoledao'; 
  const pessoasFavoritas = [
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'eee',
    'fff'
  ];

  return (
    <>

      <AlurakutMenu githubUser={githubUser} />

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

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={(e) => {
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);
              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              } 

              console.log(comunidade);

              setComunidades([...comunidades , comunidade])
              }}
            >

              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />
              </div>
              
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa"
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa" />
              </div>

              <button>
                Criar comunidade
              </button>

            </form>
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
                  <li id={`item${new Date().toISOString()}`}>
                    <a href={`/user/${item}`} >
                      <img src={`https://github.com/${item}.png`} alt="Profile Picture" />
                      <span>{item}</span>
                    </a>
                  </li>
                )})}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2> 

            <ul>
              {comunidades.map((item) => {
                return (
                  <li id={item.id}>
                    <a href={`/user/${item.title}`} >
                      <img src={item.image} alt="Community Picture" />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )})}
            </ul>
          </ProfileRelationsBoxWrapper>   
         
        </div>

      </MainGrid>

    </>
  )
}