import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'Sergio',
      name: 'Sergio Marin',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App(){

/* Se puede hacer asi pero es mejor de la otra forma

    return(
        <section className='App'>
            
            <TwitterFollowCard 
                userName="midudev"
                initialisFollowing={true}>  
                <h1>Miguel Angel Duran</h1> 
             </TwitterFollowCard>
            

            <TwitterFollowCard  
                userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard> 
            
            <TwitterFollowCard 
                userName="elonmusk">
                Elon Musk  
            </TwitterFollowCard>
            

            <TwitterFollowCard 
                userName="vxnder">
                Vanderhart    
            </TwitterFollowCard>
            
        
        </section>
    )*/

        return (
          <section className='App'>
            {
              users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                //Key es para tener un control del usuario que es, como el id 
                //suele ser una caracteristicas que no se va a repetir en otro usuario
                  key={userName}
                  userName={userName}
                  initialIsFollowing={isFollowing}
                >
                  {name}
                </TwitterFollowCard>
              ))
            }
          </section>
        )
      }
