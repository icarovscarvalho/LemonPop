'use client'

import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

// Tipagem dos modos
type Mode = "pomodoro" | "shortBreak" | "longBreak";

// Tipagem das configurações
interface Settings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export function PomodoroTimer() {

  const [time, setTime] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [settings, setSettings] = useState<Settings>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [currentMode, setCurrentMode] = useState<Mode>("pomodoro");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      new Audio(
        "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
      ).play();
      alert(
        `${currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} session completed!`
      );
      handleReset();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time, currentMode]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(settings[currentMode] * 60);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateProgress = (): number => {
    const totalSeconds = settings[currentMode] * 60;
    return ((totalSeconds - time) / totalSeconds) * 100;
  };

  const handleModeChange = (mode: Mode) => {
    setCurrentMode(mode);
    setTime(settings[mode] * 60);
    setIsRunning(false);
  };

  const handleSettingChange = (setting: keyof Settings, value: string) => {
    const numericValue = parseInt(value) || 0;
    setSettings((prev) => ({
      ...prev,
      [setting]: numericValue,
    }));
    if (setting === currentMode) {
      setTime(numericValue * 60);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 h-fit">
      <div className="bg-zinc-900 rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Botões de modo */}
        <div className="flex flex-col gap-2 items-center justify-center mb-8 md:flex-row md:space-x-4">
          <button
            className={`px-4 py-2 w-38 rounded-lg ${
              currentMode === "pomodoro"
                ? "bg-amber-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleModeChange("pomodoro")}
          >
            Custom Timer
          </button>
          <button
            className={`px-4 py-2 w-38 rounded-lg ${
              currentMode === "shortBreak"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleModeChange("shortBreak")}
          >
            Short Break
          </button>
          <button
            className={`px-4 py-2 w-38 rounded-lg ${
              currentMode === "longBreak"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleModeChange("longBreak")}
          >
            Long Break
          </button>
        </div>

        {/* Círculo e tempo */}
        <div className="relative w-40 h-64 mx-auto mb-8 md:w-64">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="4"
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
            />
            <circle
              className="text-blue-600 stroke-current"
              strokeWidth="4"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * calculateProgress()) / 100}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <span className="text-4xl font-bold md:text-6xl">{formatTime(time)}</span>
          </div>
        </div>

        {/* Botões de controle */}
        <div className="flex justify-center space-x-4 mb-8">
          {!isRunning ? (
            <button
              className="p-4 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors"
              onClick={handleStart}
            >
              <FaPlay />
            </button>
          ) : (
            <button
              className="p-4 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition-colors"
              onClick={handlePause}
            >
              <FaPause />
            </button>
          )}
          <button
            className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
            onClick={handleReset}
          >
            <FaRedo />
          </button>
        </div>

        {/* Configurações */}
        <div className="space-y-4">
          {(["pomodoro", "shortBreak", "longBreak"] as Mode[]).map((mode) => (
            <div className="flex items-center justify-between" key={mode}>
              <label className="font-medium text-white">
                {mode === "pomodoro"
                  ? "Pomodoro Duration (minutes):"
                  : mode === "shortBreak"
                  ? "Short Break Duration (minutes):"
                  : "Long Break Duration (minutes):"}
              </label>
              <input
                type="number"
                min={1}
                value={settings[mode]}
                onChange={(e) => handleSettingChange(mode, e.target.value)}
                className="w-15 p-2 border border-[#fff] text-white rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
