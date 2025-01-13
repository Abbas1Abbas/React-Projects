import React, { useEffect } from 'react'
import { useState } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {

  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState({x: 0, o: 0});

  const handleClick = (index) => {
    if(winner) return;
    if(boxes[index]) return;

    const newBoxes = [...boxes];
    newBoxes[index] = currentTurn;
    setBoxes(newBoxes);
    setCurrentTurn((prev)=>prev==="X" ? "O" : "X");
  }

  const updateScore = () => {
    if(!winner) return;
    if(winner.toLowerCase() === "x"){
      const newScore = {...score};
      newScore.x = score.x + 1;
      setScore(newScore);
    }else{
      const newScore = {...score};
      newScore.o = score.o + 1;
      setScore(newScore);
    }
  }

  const checkWinner = () => {
    const winningCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    winningCombo.map((combo)=>{
      const [a, b, c] = combo;
      if(boxes[a] === boxes[b] && boxes[b] === boxes[c] && boxes[a] !== null){
          setWinner(boxes[a]);
      }
    })
  }

  const resetTheGame = () => {
    setBoxes(Array(9).fill(null));
    setWinner('');
  }

  useEffect(()=>{
    checkWinner();
  },[boxes]);

  useEffect(()=>{
    updateScore();
  },[winner]);

  return (
    <div className='mainBox'>
      <h1 className=''>Tic Tac Toe</h1>

      <br />
      <h3>Score X:{score.x}, O:{score.o}</h3>

      <br />

      {winner && <h2>Winner Is {winner}</h2>}
      
      <br />

      <div className='gridBox'>
        {boxes.map((box, index)=>(
          <div
          key={index}
          className='box'
          onClick={()=>handleClick(index)}
          >{box}</div>
        ))}
      </div>

      <button onClick={()=>resetTheGame()} className='resetBtn'>Reset</button>

    </div>
  )
}

export default TicTacToe