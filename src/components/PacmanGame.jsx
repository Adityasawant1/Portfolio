import React, { useState, useEffect, useRef } from 'react';
import '../style/pacman.css';

const WIDTH = 15;
const HEIGHT = 11;
const INITIAL_PACMAN_IDX = 142; // row 9, col 7
const INITIAL_GHOST_IDX = 22;   // row 1, col 7
const TARGET_SCORE = 20;

const INITIAL_BOARD = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

// Cell Types: 0 = dot, 1 = wall, 2 = empty

const PacmanGame = () => {
    const [board, setBoard] = useState(INITIAL_BOARD);
    const boardRef = useRef(INITIAL_BOARD);

    const [pacmanIdx, setPacmanIdx] = useState(INITIAL_PACMAN_IDX);
    const [ghostIdx, setGhostIdx] = useState(INITIAL_GHOST_IDX);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState('IDLE'); // IDLE, PLAYING, GAMEOVER, WON
    const [pacClass, setPacClass] = useState('right');
    const [unlocked, setUnlocked] = useState(false);

    const directionRef = useRef(1);
    const nextDirectionRef = useRef(1);
    const gameRef = useRef(null);

    const resetGame = () => {
        boardRef.current = [...INITIAL_BOARD];
        setBoard(boardRef.current);
        setPacmanIdx(INITIAL_PACMAN_IDX);
        setGhostIdx(INITIAL_GHOST_IDX);
        setScore(0);
        setStatus('PLAYING');
        setPacClass('right');
        directionRef.current = 1;
        nextDirectionRef.current = 1;
        setUnlocked(false);

        // Auto focus when starting
        if (gameRef.current) {
            gameRef.current.focus();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Allow scrolling normally if the game is not playing
            if (status !== 'PLAYING') return;

            // Ensure focus remains on the game container to prevent page jump issues
            if (gameRef.current && document.activeElement !== gameRef.current) {
                gameRef.current.focus();
            }

            let newDir = null;
            let newClass = '';
            if (e.key === 'ArrowUp') {
                newDir = -WIDTH;
                newClass = 'up';
            } else if (e.key === 'ArrowDown') {
                newDir = WIDTH;
                newClass = 'down';
            } else if (e.key === 'ArrowLeft') {
                newDir = -1;
                newClass = 'left';
            } else if (e.key === 'ArrowRight') {
                newDir = 1;
                newClass = 'right';
            }

            if (newDir !== null) {
                e.preventDefault(); // Prevent scrolling while playing
                nextDirectionRef.current = newDir;
                setPacClass(newClass);
            }
        };

        const gameEl = gameRef.current;
        let touchStartX = 0;
        let touchStartY = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (status === 'PLAYING') {
                e.preventDefault();
            }
        };

        const handleTouchEnd = (e) => {
            if (status !== 'PLAYING') return;

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const dx = touchEndX - touchStartX;
            const dy = touchEndY - touchStartY;

            let newDir = null;
            let newClass = '';

            if (Math.abs(dx) > Math.abs(dy)) {
                if (Math.abs(dx) > 30) {
                    newDir = dx > 0 ? 1 : -1;
                    newClass = dx > 0 ? 'right' : 'left';
                }
            } else {
                if (Math.abs(dy) > 30) {
                    newDir = dy > 0 ? WIDTH : -WIDTH;
                    newClass = dy > 0 ? 'down' : 'up';
                }
            }

            if (newDir !== null) {
                nextDirectionRef.current = newDir;
                setPacClass(newClass);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        if (gameEl) {
            gameEl.addEventListener('touchstart', handleTouchStart, { passive: false });
            gameEl.addEventListener('touchmove', handleTouchMove, { passive: false });
            gameEl.addEventListener('touchend', handleTouchEnd, { passive: false });
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (gameEl) {
                gameEl.removeEventListener('touchstart', handleTouchStart);
                gameEl.removeEventListener('touchmove', handleTouchMove);
                gameEl.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [status]);

    useEffect(() => {
        if (status !== 'PLAYING') return;

        const moveInterval = setInterval(() => {
            setPacmanIdx((prevIdx) => {
                let proposedIdx = prevIdx + nextDirectionRef.current;
                let actualDir = nextDirectionRef.current;

                // If next direction is blocked, try to keep going current direction
                if (boardRef.current[proposedIdx] === 1) {
                    proposedIdx = prevIdx + directionRef.current;
                    actualDir = directionRef.current;

                    // If current direction is also blocked, stay put
                    if (boardRef.current[proposedIdx] === 1) {
                        return prevIdx;
                    }
                }

                directionRef.current = actualDir;
                return proposedIdx;
            });

            setGhostIdx((prevGhostIdx) => {
                const possibleMoves = [-1, 1, -WIDTH, WIDTH].filter(
                    dir => boardRef.current[prevGhostIdx + dir] !== 1
                );

                if (possibleMoves.length === 0) return prevGhostIdx; // Should not happen with our layout

                // Randomly pick the next valid move
                const randomDir = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
                return prevGhostIdx + randomDir;
            });

        }, 250); // Speed of game

        return () => clearInterval(moveInterval);
    }, [status]); // Remove board dependency to prevent interval resetting

    // Handle dot consumption and win/loss logic
    useEffect(() => {
        if (status !== 'PLAYING') return;

        // Check collision with ghost
        if (pacmanIdx === ghostIdx) {
            setStatus('GAMEOVER');
            return;
        }

        // Check eating dot
        if (boardRef.current[pacmanIdx] === 0) {
            const newBoard = [...boardRef.current];
            newBoard[pacmanIdx] = 2; // Make it empty
            boardRef.current = newBoard;
            setBoard(newBoard);

            const newScore = score + 1;
            setScore(newScore);

            // Handle bonus logic
            if (newScore === TARGET_SCORE && !unlocked) {
                setUnlocked(true);
                // Automatically scroll to skills component
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                    setTimeout(() => {
                        skillsSection.scrollIntoView({ behavior: 'smooth' });
                    }, 1500);
                }
            }

            // Check if all dots are eaten
            if (newBoard.filter(cell => cell === 0).length === 0) {
                setStatus('WON');
            }
        }
    }, [pacmanIdx, ghostIdx, status, score, unlocked]);

    // If game is over and they are on top of each other
    const showCrash = status === 'GAMEOVER' && pacmanIdx === ghostIdx;

    return (
        <section className="pacman-container" id="minigame" tabIndex="0" ref={gameRef} style={{ marginTop: '-40px' }}>
            <div className="pacman-header">
                <h2>Mini Game</h2>
            </div>

            <div className="score-board">
                <span>SCORE: {score}</span>
                <span>{status === 'PLAYING' ? 'PLAYING' : status}</span>
            </div>

            {/* Set a fixed container around the grid to prevent layout jumps 
                grid itself is 15 * 40 = 600px width and 11 * 40 = 440px height 
                + borders / paddings = around 632px x 472px */}
            <div style={{ position: 'relative', width: 'fit-content' }}>
                <div className="pacman-grid" onClick={() => gameRef.current?.focus()}>
                    {board.map((cell, idx) => {
                        const isPacman = idx === pacmanIdx;
                        const isGhost = idx === ghostIdx && idx !== pacmanIdx; // Avoid overlapping drawing

                        return (
                            <div
                                key={idx}
                                className={`cell ${cell === 1 ? 'wall' : ''}`}
                            >
                                {cell === 0 && <div className="dot"></div>}
                                {(isPacman && !showCrash) && <div className={`pacman ${pacClass}`}></div>}
                                {isGhost && <div className="ghost"></div>}
                                {/* Show ghost only on crash to cover pacman */}
                                {isPacman && showCrash && <div className="ghost"></div>}
                            </div>
                        );
                    })}

                    {status !== 'PLAYING' && (
                        <div className="game-overlay">
                            {status === 'IDLE' && <h3>PAC-MAN</h3>}
                            {status === 'GAMEOVER' && <h3>GAME OVER</h3>}
                            {status === 'WON' && <h3>YOU WIN!</h3>}

                            {status === 'IDLE' && <p>Collect 20 dots to unlock a surprise using ARROW KEYS or by SWIPING!</p>}
                            {status !== 'IDLE' && <p>Score: {score}</p>}

                            <button className="start-btn" onClick={(e) => {
                                // Prevent default so button click doesn't steal permanent focus
                                e.preventDefault();
                                resetGame();
                            }}>
                                {status === 'IDLE' ? 'Start Game' : 'Play Again'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {unlocked && (
                <div className="unlock-message">
                    🎉 You unlocked Aditya's Skills! Scrolling...
                </div>
            )}
        </section>
    );
};

export default PacmanGame;
