import React, { useContext } from 'react';
import { BoardContext } from '../context/BoardContext.js'
import Title from './Title';
import { motion } from "framer-motion"


function Match() {
    const { match, add, gameSetMatch } = useContext(BoardContext)

    return (
        <div>
            {
                match.length === 0 ? (<div></div>) : (
                    <React.Fragment>
                        <div className="text-center">
                        <Title title="Table Tennis Match" />
                            <motion.div className="row"
                             initial = { { opacity: 0 } }
                             animate={{ opacity: 1}}
                             transition={{ duration: 0.5 }}>
                                {
                                    match.map((item, key) => {
                                        return (
                                            <div className="col-md-6 match" key={key}>
                                                <img src={item.avatar} alt="image" />
                                                <h2 className="match-name"> {item.name} </h2>
                                                <div className="score-number">{item.score} </div>
                                                <div><button className="btn btn-success" onClick={() => add(item)}>+</button></div>
                                            </div>
                                        )
                                    })
                                }
                               
                            </motion.div>
                            <div className="position-relative vs">Vs</div>
                            <button className="position-relative btn btn-danger game-set" onClick={gameSetMatch}>GAME SET MATCH</button>
                        </div>
                    </React.Fragment>

                )

            }
        </div>
    );
}

export default Match;