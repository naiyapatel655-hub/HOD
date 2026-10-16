import React, { useState } from 'react';
import { soundscape, SoundMode } from '../utils/soundscape';
import {
  Volume2,
  VolumeX,
  Waves,
  Hammer,
  Music,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Sliders,
  Check
} from 'lucide-react';

interface AudioPanelProps {
  isAudioActive: boolean;
  onAudioStateChange: (active: boolean) => void;
}

export const AudioPanel: React.FC<AudioPanelProps> = ({
  isAudioActive,
  onAudioStateChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<SoundMode>(soundscape.getMode());
  const [volume, setVolume] = useState<number>(soundscape.getVolume() * 100);
  const [sfxOn, setSfxOn] = useState<boolean>(soundscape.isSfxOn());

  const handleSelectMode = (mode: SoundMode) => {
    soundscape.setMode(mode);
    setCurrentMode(mode);
    onAudioStateChange(mode !== 'off');
  };

  const handleToggleMute = () => {
    if (isAudioActive) {
      soundscape.stop();
      setCurrentMode('off');
      onAudioStateChange(false);
    } else {
      soundscape.setMode('river');
      setCurrentMode('river');
      onAudioStateChange(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    soundscape.setVolume(val / 100);
  };

  const handleToggleSfx = () => {
    const next = soundscape.toggleSfx();
    setSfxOn(next);
    if (next) {
      soundscape.playWoodBlockTap();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Audio Console */}
      {isOpen && (
        <div className="mb-3 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-5 shadow-2xl w-80 space-y-4 animate-in slide-in-from-bottom-2 duration-200 text-stone-900">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A44226] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                Craft Acoustic Soundscape
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-800 p-1 rounded-md"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Sound Ambiance Mode Selector */}
          <div className="space-y-2">
            <label className="text-[11px] font-mono uppercase text-stone-500 block">
              1. Ambient Sound Mode
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => handleSelectMode('river')}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  currentMode === 'river'
                    ? 'border-[#A44226] bg-[#A44226]/10 text-[#A44226] font-semibold'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <Waves className="w-4 h-4 mb-1" />
                <span className="text-xs">Kshipra Waters</span>
              </button>

              <button
                onClick={() => handleSelectMode('workshop')}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  currentMode === 'workshop'
                    ? 'border-[#A44226] bg-[#A44226]/10 text-[#A44226] font-semibold'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <Hammer className="w-4 h-4 mb-1" />
                <span className="text-xs">Chhipa Hearth</span>
              </button>

              <button
                onClick={() => handleSelectMode('drone')}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  currentMode === 'drone'
                    ? 'border-[#A44226] bg-[#A44226]/10 text-[#A44226] font-semibold'
                    : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <Music className="w-4 h-4 mb-1" />
                <span className="text-xs">Malwa Drone</span>
              </button>
            </div>
          </div>

          {/* Master Volume Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono text-stone-600">
              <span>Ambiance Volume</span>
              <span>{volume}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              disabled={!isAudioActive}
              className="w-full accent-[#A44226] cursor-pointer disabled:opacity-40"
            />
          </div>

          {/* Interactive SFX Toggle & Preview */}
          <div className="pt-2 border-t border-stone-100 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase text-stone-500">
                Interactive Touch SFX
              </span>
              <button
                onClick={handleToggleSfx}
                className={`text-xs px-2.5 py-1 rounded-md font-mono border transition-all ${
                  sfxOn
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-100 text-stone-500 border-stone-200'
                }`}
              >
                {sfxOn ? 'SFX: Enabled' : 'SFX: Muted'}
              </button>
            </div>

            {/* Test sound buttons */}
            <div className="grid grid-cols-3 gap-1 pt-1">
              <button
                onClick={() => soundscape.playWoodBlockTap()}
                title="Hear woodblock stamp"
                className="py-1 px-2 text-[10px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-center transition-colors truncate"
              >
                Wood Stamp
              </button>
              <button
                onClick={() => soundscape.playDropletSound()}
                title="Hear dye droplet"
                className="py-1 px-2 text-[10px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-center transition-colors truncate"
              >
                Dye Droplet
              </button>
              <button
                onClick={() => soundscape.playBronzeChime()}
                title="Hear temple bell chime"
                className="py-1 px-2 text-[10px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-center transition-colors truncate"
              >
                Bronze Bell
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Audio Pill Button */}
      <div className="flex items-center gap-2 bg-[#FAF8F5]/95 backdrop-blur-md border border-stone-200 shadow-lg rounded-full p-1.5 pl-3">
        <button
          onClick={handleToggleMute}
          className="flex items-center gap-2 text-xs font-mono text-stone-800 hover:text-[#A44226] transition-colors"
          title={isAudioActive ? 'Mute Craft Ambiance' : 'Play Kshipra River & Craft Soundscape'}
        >
          {isAudioActive ? (
            <>
              {/* Mini animated equalizer bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                <span className="w-1 bg-[#A44226] animate-[pulse_1s_ease-in-out_infinite] h-3 rounded-full" />
                <span className="w-1 bg-[#A44226] animate-[pulse_0.7s_ease-in-out_infinite] h-2 rounded-full" />
                <span className="w-1 bg-[#A44226] animate-[pulse_1.2s_ease-in-out_infinite] h-3.5 rounded-full" />
              </div>
              <span className="capitalize">{currentMode} Soundscape</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-400" />
              <span className="text-stone-500">Craft Audio: Off</span>
            </>
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors ml-1"
          title="Open Audio Studio Settings"
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <Sliders className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
