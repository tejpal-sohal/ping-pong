import React, { useContext } from 'react';
import Slider from "react-slick";
import Title from './Title';
import Nav from './Nav';
import { BoardContext } from '../context/BoardContext.js'
import { motion } from "framer-motion"



function Players() {
    const { addPlayerToMatch, players, count, games } = useContext(BoardContext)
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <div>
            {
                count === 3 ? (<Nav/>) : (
                    <React.Fragment>
                        {
                          count === 2 ? <Title title="Select another player" /> :      <Title title="Player Selection" />
                        }
                   
                        <div className="mb-3">
                            <Slider {...settings}>

                                {players.map((player, key) => {
                                    return (
                                        <motion.div className="card col-md-12" key={key} 
                                        initial = { { scale: 0.3 } }
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}

                                        >
                                            <img src={player.avatar} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{player.name}</h5>
                                                <p className="card-title"><i className="far fa-user"></i> Player Stats</p>
                                                <p className="text-muted mb-0"><i className="fas fa-table-tennis"></i> Games: {games.filter(game => game.player1.id === player.id).length}</p>
                                                <p className="text-muted mb-0"><i className="fas fa-trophy"></i> Won: {games.filter(game => game.player1.id === player.id && game.player1.score > game.player2.score).length}</p>
                                                <p className="text-muted mb-3"> <i className="fas fa-frown"></i> Lost: {games.filter(game => game.player1.id === player.id && game.player1.score < game.player2.score).length}</p>
                                                <button onClick={addPlayerToMatch} className="btn btn-outline-dark">Play</button>
                                            </div>
                                        </motion.div>
                                    )
                                })

                                }
                            </Slider>
                        </div>
                    </React.Fragment>
                )
            }


        </div>

    );
}

export default Players;