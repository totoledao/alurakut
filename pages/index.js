import React from 'react';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileRelationsBox from '../src/components/ProfileRelationsBox';
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

  const [comunidades, setComunidades] = React.useState([]);

  const githubUser = 'totoledao'; 
  const pessoasFavoritas = [
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'eee',
    'fff'
  ];

  const [seguidoresGithub, setSeguidoresGithub] = React.useState([]);

  React.useEffect((() => {
    //API github - GET
    fetch('https://api.github.com/users/peas/followers')
    .then( data => data.json() )    
    .then( data => { setSeguidoresGithub(data); console.log(data[0].login); });

    //API DatoCMS - GraphQL
    fetch('https://graphql.datocms.com/' , {
      method: 'POST',
      headers: {
        'Authorization': '49258b04f0a11c491d2b76eb17a76f',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          title
          id
          imageurl
          creatorslug
          }    
        }` })
      })  
      .then( data => data.json() )
      .then( data => {
        const allCommunities = data.data.allCommunities;
        console.log(allCommunities);
        setComunidades(allCommunities);
      })
  }),[]);
  
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
                title: dadosDoForm.get('title'),
                imageurl: dadosDoForm.get('image'),
                creatorslug: githubUser,
              } 

              fetch('/api/communityCreator', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              })
              .then(async (response) => {
                const data = await response.json();
                console.log(data);
                const communities = data.communityCreated;
                setComunidades([...communities , communities])
              })

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

        <ProfileRelationsBox fieldName={'Pessoas da comunidade'} items={pessoasFavoritas} />     

        <ProfileRelationsBox fieldName={'Seguidores'} items={pessoasFavoritas} />

          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2> 

            <ul>
              {comunidades.map((item) => {
                return (
                  <li id={item.id}>
                    <a href={`/communities/${item.id}`} >
                      <img src={item.imageurl} alt="Community Picture" />
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