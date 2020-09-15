import React, { useContext } from 'react';
import { BoardContext } from '../context/BoardContext.js'
import Title from './Title';
import { motion } from "framer-motion"

function ConvertDate(date) {
    const d = new Date(date)
    return d.toDateString()
}


function Games() {
    const { games, players } = useContext(BoardContext)
    const CheckID = (id) => {
        return players.map(player => {
            if (player.id === id) {
                return player.name
            }
        })


    }

    return (
        <div>
             <Title title="Match Results" />
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-dark">
                    <thead>
                        <tr>

                            <th scope="col">Date</th>
                            <th scope="col">Player 1</th>
                            <th scope="col">V</th>
                            <th scope="col">Player 2</th>
                            <th scope="col">Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            games.map((game, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <tr>
                                            <th scope="row">{ConvertDate(game.date)}</th>
                                            <td>{CheckID(game.player1.id)} <small>({(game.player1.score)})</small> </td>
                                            <td>v</td>
                                            <td>{CheckID(game.player2.id)} <small>({(game.player2.score)})</small></td>
                                            <td>{game.player1.score > game.player2.score ? CheckID(game.player1.id) : CheckID(game.player2.id)} </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            }).reverse()
                        }
                    </tbody>
                </table>
                </div>
            </div >

    );
}

export default Games;