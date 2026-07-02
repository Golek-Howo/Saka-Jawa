"use client";

import { createContext, useContext, useState } from "react";

/**
 * GameContext — menyimpan state game "Petualangan 4 Pendhapa"
 * Hidup selama sesi browser, reset saat halaman di-refresh (by design).
 * Tidak ada localStorage, sessionStorage, atau API call.
 */

const PENDHAPAS = ["batik", "wayang", "gamelan", "kuliner"];

const defaultScores = { batik: 0, wayang: 0, gamelan: 0, kuliner: 0 };
const defaultCompleted = { batik: false, wayang: false, gamelan: false, kuliner: false };

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [scores, setScores] = useState(defaultScores);
  const [completed, setCompleted] = useState(defaultCompleted);

  /** Update skor satu pendhapa. Skor baru menggantikan lama (tidak diakumulasi). */
  const updateScore = (pendhapa, score) => {
    if (!PENDHAPAS.includes(pendhapa)) return;
    setScores((prev) => ({ ...prev, [pendhapa]: score }));
  };

  /** Tandai pendhapa sebagai selesai. */
  const markCompleted = (pendhapa) => {
    if (!PENDHAPAS.includes(pendhapa)) return;
    setCompleted((prev) => ({ ...prev, [pendhapa]: true }));
  };

  /** Reset seluruh progres ke kondisi awal. */
  const resetGame = () => {
    setScores(defaultScores);
    setCompleted(defaultCompleted);
  };

  /** Total skor dari semua pendhapa. */
  const totalScore = Object.values(scores).reduce((acc, s) => acc + s, 0);

  /** Jumlah pendhapa yang sudah diselesaikan. */
  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <GameContext.Provider
      value={{
        scores,
        completed,
        totalScore,
        completedCount,
        updateScore,
        markCompleted,
        resetGame,
        PENDHAPAS,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

/** Hook untuk mengakses GameContext. Harus dipakai di dalam <GameProvider>. */
export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame harus digunakan di dalam <GameProvider>");
  }
  return ctx;
}

export default GameContext;
