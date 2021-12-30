import React , {useState, useEffect} from 'react';
import {pattern} from './pattern'
import './App.css'
import { Square } from './Component/Square';


export default function App(){


    const [boardValues, setBoardValue] = useState(["", "", "","", "","","","",""])
    const [playerValue, setPlayerValue] = useState("O")
    const [result, setResult] = useState({player: "", state: ""})



    const checkResult = ()=>{
        let selectedSign
        pattern.forEach(item=>{
            if (boardValues[item[0]] === "") return
            selectedSign = boardValues[item[0]]
            let winCheck = true
            item.forEach(boxSign=>{
                if(boardValues[boxSign] !== selectedSign){
                    winCheck = false
                } 
            })
            if(winCheck) {
                return setResult({player: playerValue, state: "Won"})}
        })
    }

    useEffect(()=>{
        checkResult() 
        playerValue==="X"? setPlayerValue("O") : setPlayerValue("X") 
    }, [boardValues])

    useEffect(()=>{
        if (result.state === "Won"){
            alert(`player ${result.player} : ${result.state}`)
            restart()
        }
    }, [result]) 

    const restart =()=>{
        setBoardValue(["", "", "","", "","","","",""])
    }

    const chooseBox = (boxNum)=>{
        if (boardValues[boxNum] !== "") return
        setBoardValue(boardValues.map((val,ind)=>{
            if(ind === boxNum && val === ""){
                return playerValue
            }else{
                return val
            }
        })
        )
    }



    
    return(
        <div className='mainContainer'>
            <div className='board'>
                <h1 className='title'>TIC TAC TOE</h1>
                <div className='squareBox'>
                    <Square mark={boardValues[0]} chooseBox={()=>{chooseBox(0)}}/>
                    <Square mark={boardValues[1]} chooseBox={()=>{chooseBox(1)}}/>
                    <Square mark={boardValues[2]} chooseBox={()=>{chooseBox(2)}}/>
                    <Square mark={boardValues[3]} chooseBox={()=>{chooseBox(3)}}/>
                    <Square mark={boardValues[4]} chooseBox={()=>{chooseBox(4)}}/>
                    <Square mark={boardValues[5]} chooseBox={()=>{chooseBox(5)}}/>
                    <Square mark={boardValues[6]} chooseBox={()=>{chooseBox(6)}}/>
                    <Square mark={boardValues[7]} chooseBox={()=>{chooseBox(7)}}/>
                    <Square mark={boardValues[8]} chooseBox={()=>{chooseBox(8)}}/>
                </div>

            </div>
        </div>
    )
}