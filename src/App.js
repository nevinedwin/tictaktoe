import React , {useState, useEffect} from 'react';
import {pattern} from './pattern'
import './App.css'
import { Square } from './Component/Square';
import Button from './Component/Button';


export default function App(){


    const [boardValues, setBoardValue] = useState(["", "", "","", "","","","",""])
    const [playerValue, setPlayerValue] = useState({currval: "O", ownval : ""})
    const [result, setResult] = useState({player: "", state: ""})
    const [showButton, setShowButton] = useState(true)



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
            if(winCheck){
                console.log(playerValue)
                if(playerValue.currval === playerValue.ownVal){    
                    return setResult({player: "You", state: "Won"})
                }else{
                    return setResult({player: playerValue.currval, state: "Won"})
                }}
            })
        
    }


    const checkTie=()=>{
        let tie = true
        boardValues.forEach(val=>{
            if (val === ""){
                tie = false
            }
        })
             if(tie){
                setResult({player: "No one Win", state: "Tie"})
             }
    }

    useEffect(()=>{
        checkTie()
        checkResult() 
        playerValue.currval==="X"? setPlayerValue(prev=>({currval: "O", ownval : prev.ownval})) : setPlayerValue(prev=>({currval: "X", ownval : prev.ownval})) 
    }, [boardValues])

    useEffect(()=>{
        if (result.state !== ""){
            alert(` ${result.player} : ${result.state}`)
            restart()
        }
    }, [result]) 

    const restart =()=>{
        setBoardValue(["", "", "","", "","","","",""])
        setShowButton(true)
        setPlayerValue({currval: "O", ownval : ""})
    }

    const chooseBox = (boxNum)=>{
        setShowButton(false)
        if (boardValues[boxNum] !== "") return
        setBoardValue(boardValues.map((val,ind)=>{
            if(ind === boxNum && val === ""){
                return playerValue.currval
            }else{
                return val
            }
        })
        )
    }

    const selectButton = (sign)=>{
        setPlayerValue({currval: sign, ownval : sign})
        setShowButton(false)
    }


    
    return(
        <div className='mainContainer'>
            <div className='board'>
                <h1 className='title'>TIC TAC TOE</h1>
                {showButton && <div  className='buttonGroup'>
                    <p className='choose'>Choose: </p>
                    <Button value={"X"} selectButton={()=>selectButton("X")}/>
                    <Button value={"O"} selectButton={()=>selectButton("O")}/>
                </div>}
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