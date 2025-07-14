import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import Board from "../components/board/board";
import Keyboard from "../components/keyboard/Keyboard";
import { checkWord } from "../services/wordApi";

const ATTEMPTS = 6;

export default function GamePage() {
  return (
    <div className="game-container">
      <h2>¡Adiviná la palabra!</h2>
      
    </div>
  );
}