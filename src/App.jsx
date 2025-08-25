import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>

        <TwitterFollowCard userName="Theyobii">
            Jonny Cabrera
        </TwitterFollowCard>
        
        <TwitterFollowCard userName="MrTanuk" initialIsFollowing={true}>
            El papa de los helados
        </TwitterFollowCard>
        
        <TwitterFollowCard userName="Serverket" initialIsFollowing={true}>
            Manuel Hernandez
        </TwitterFollowCard>
        </section>
    )
}