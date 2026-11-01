import React from 'react'
import Winner from './winner'
import Box from './box'
import './tictactoe.css'
const Tictactoe = () => {
    // const [inText, setInText] = React.useState('X');
    const [player, setPlayer] = React.useState('X');
    const [inText1, setInText1] = React.useState('');
    const [inText2, setInText2] = React.useState('');
    const [inText3, setInText3] = React.useState('');
    const [inText4, setInText4] = React.useState('');
    const [inText5, setInText5] = React.useState('');
    const [inText6, setInText6] = React.useState('');
    const [inText7, setInText7] = React.useState('');
    const [inText8, setInText8] = React.useState('');
    const [inText9, setInText9] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    const [disabled1, setDisabled1] = React.useState(false);
    const [disabled2, setDisabled2] = React.useState(false);
    const [disabled3, setDisabled3] = React.useState(false);
    const [disabled4, setDisabled4] = React.useState(false);
    const [disabled5, setDisabled5] = React.useState(false);
    const [disabled6, setDisabled6] = React.useState(false);
    const [disabled7, setDisabled7] = React.useState(false);
    const [disabled8, setDisabled8] = React.useState(false);
    const [disabled9, setDisabled9] = React.useState(false);
    // async function entry() {
    //     if(player === 'X') {
    //         setInText('X');
    //         setPlayer('O');
    //         console.log(inText);
    //         console.log(player);
    //         // setDisabled(true);
    //     }
    //     else if(player === 'O') {
    //         setInText('O');
    //         setPlayer('X');
    //         console.log(inText);
    //         console.log(player);
    //         // setDisabled(true);
    //     }
    // }
    const [winner, setWinner] = React.useState('');
    const [xlist, setXList] = React.useState([]);
    const [olist, setOList] = React.useState([]);
    const [list, setList] = React.useState([]);
    const l = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    const [subList, setSubList] = React.useState([]);

    function randomBox() {
        return Math.floor(Math.random() * 9) + 1;
    }
    function checkWinner() {
        l.forEach(([a, b, c]) => {

            if (xlist.includes(a) && xlist.includes(b) && xlist.includes(c)) {
                setWinner('WINNER IS X');
                setDisabled1(true)
                setDisabled2(true)
                setDisabled3(true)
                setDisabled4(true)
                setDisabled5(true)
                setDisabled6(true)
                setDisabled7(true)
                setDisabled8(true)
                setDisabled9(true)

            }
            else if (olist.includes(a) && olist.includes(b) && olist.includes(c)) {
                setWinner('WINNER IS O');
                setDisabled1(true)
                setDisabled2(true)
                setDisabled3(true)
                setDisabled4(true)
                setDisabled5(true)
                setDisabled6(true)
                setDisabled7(true)
                setDisabled8(true)
                setDisabled9(true)
            }
            else if (xlist.length + olist.length === 9) {
                setWinner('DRAW');
                setDisabled1(true)
                setDisabled2(true)
                setDisabled3(true)
                setDisabled4(true)
                setDisabled5(true)
                setDisabled6(true)
                setDisabled7(true)
                setDisabled8(true)
                setDisabled9(true)
            }







        });
    }
    React.useEffect(() => {
        checkWinner();
    }, [xlist, olist]);
    React.useEffect(() => {
        if (player === 'O' && winner === '') {
            playGame();
        }
    }, [player]);
    function entry(num) {
        setXList([...xlist, num]);
    }

    const playGame = () => {
        // Stop if the board is full
        if (xlist.length + olist.length >= 9) return;

        let num = randomBox();

        // Generate another number if the box is occupied
        while (xlist.includes(num) || olist.includes(num)) {
            num = randomBox();
        }

        if (num === 1) {
            setInText1('O');
            setDisabled1(true);
        }
        else if (num === 2) {
            setInText2('O');
            setDisabled2(true);
        }
        else if (num === 3) {
            setInText3('O');
            setDisabled3(true);
        }
        else if (num === 4) {
            setInText4('O');
            setDisabled4(true);
        }
        else if (num === 5) {
            setInText5('O');
            setDisabled5(true);
        }
        else if (num === 6) {
            setInText6('O');
            setDisabled6(true);
        }
        else if (num === 7) {
            setInText7('O');
            setDisabled7(true);
        }
        else if (num === 8) {
            setInText8('O');
            setDisabled8(true);
        }
        else if (num === 9) {
            setInText9('O');
            setDisabled9(true);
        }

        setOList([...olist, num]);
        setPlayer('X');
    };

    return (
        <div>
            <div id="turn">
                <h3 style={{ color: 'white' }}>Current Turn: {player}</h3>
            </div>
            <div id='tictactoe'>
                <div className='row' id='row1'>
                    <Box inText={inText1} number={1} onClick={() => {
                        setInText1(player);
                        entry(1);
                        setDisabled1(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                        // setSubList([...subList, 1]);

                    }}
                        disabled={disabled1} />
                    <Box inText={inText2} number={2} onClick={() => {
                        setInText2(player);
                        entry(2);
                        setDisabled2(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                        // setSubList([...subList, 2]);

                    }
                    }
                        disabled={disabled2} />
                    <Box inText={inText3} number={3} onClick={() => {
                        setInText3(player);
                        entry(3);
                        setDisabled3(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                        // setSubList([...subList, 3]);

                    }}
                        disabled={disabled3} />
                </div>
                <div className='row' id='row2'>
                    <Box inText={inText4} number={4} onClick={() => {
                        setInText4(player);
                        entry(4);
                        setDisabled4(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                    }}
                        disabled={disabled4} />
                    <Box inText={inText5} number={5} onClick={() => {
                        setInText5(player);
                        entry(5);
                        setDisabled5(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                    }}
                        disabled={disabled5} />
                    <Box inText={inText6} number={6} onClick={() => {
                        setInText6(player);
                        entry(6);
                        setDisabled6(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                    }}
                        disabled={disabled6} />
                </div>
                <div className='row' id='row3'>
                    <Box inText={inText7} number={7} onClick={() => {
                        setInText7(player);
                        entry(7);
                        setDisabled7(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()

                    }}
                        disabled={disabled7} />
                    <Box inText={inText8} number={8} onClick={() => {
                        setInText8(player);
                        entry(8);
                        setDisabled8(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()

                    }}
                        disabled={disabled8} />
                    <Box inText={inText9} number={9} onClick={() => {
                        setInText9(player);
                        entry(9);
                        setDisabled9(true)
                        setPlayer(player === 'X' ? 'O' : 'X');
                        // checkWinner()
                    }}
                        disabled={disabled9} />
                </div>
            </div>
            <div id="res">
                < Winner result={winner} />
            </div>
        </div>
    )
}

export default Tictactoe
