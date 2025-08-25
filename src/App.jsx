import './App.css'
import { XFollowCard } from './XFollowCard'

export function App () {
    return (
        <section className='App'>

        <XFollowCard userName="Theyobii">
            Jonny Cabrera
        </XFollowCard>
        
        <XFollowCard userName="MrTanuk" initialIsFollowing={true}>
            El papa de los helados
        </XFollowCard>
        
        <XFollowCard userName="Serverket" initialIsFollowing={true}>
            Manuel Hernandez
        </XFollowCard>
        </section>
    )
}