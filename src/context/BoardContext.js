import React, { createContext, useState, useEffect } from 'react'
import data from './data.json'

export const BoardContext = createContext();

const BoardContextProvider = (props) => {
    const [count, setCount] = useState(1)
    const [match, setMatch] = useState([])
    const [players, setPlayers] = useState([])
    const [games, setGames] = useState([])
    

    useEffect(()=>{
      setPlayers(data.players)
      setGames(data.games)
    }, [])


    const add = (item) => {
        item.score += 1
        setMatch(match => [...match], match)
    }

    const gameSetMatch = () => {
        var d = new Date();
        var n = d.toISOString();
        const obj = {
                "date": n,
                "player1": {
                    "id": match[0].id,
                    "score": match[0].score
                },
                "player2": {
                    "id": match[1].id,
                    "score": match[1].score
                }
            }

            setGames(games => [...games, obj])
            setMatch([])
            setCount(1)
        }
    

    const addPlayerToMatch = (e) => {
         if (count < 3) {
             const name = e.target.parentNode.firstChild.innerHTML
             console.log(name)
             data.players.map(player => {
                 if (name === player.name) {
                     const obj = {
                         "id": player.id,
                         "name": player.name,
                         "avatar": player.avatar,
                         "score": 0
                     }
                     setMatch(match => [...match, obj])

                 }
             })
         }


         setCount(count + 1)
    }


    return (
        <BoardContext.Provider value={{ players,games, addPlayerToMatch, match, add, count, gameSetMatch}}>
            {props.children}
        </BoardContext.Provider>
    )
}
export default BoardContextProvider;