import React, { Component } from 'react'
import Square from './Square'
import '../assets/styles/Board.css'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            square: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.square.slice()
        squares[i] = 'X'
        this.setState({squares: squares})
    }

    renderSquare(i) {
        return <Square value={this.state.square[i]} />
    }

    render() {
        const status = 'Next player: X'

        return(
            <div>
                <div className="status">{status}</div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board