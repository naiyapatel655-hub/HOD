import React from 'react';
import { Presentation, BookOpen, Volume2, VolumeX } from 'lucide-react';

interface TopBarProps {
  viewMode: 'case-study' | 'presentation';
  onToggleViewMode: () => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  viewMode,
  onToggleViewMode,
  isAudioActive,
  onToggleAudio,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-lg font-serif font-bold tracking-tight text-stone-900 hover:text-[#A44226] transition-colors whitespace-nowrap shrink-0"
        >
          Bhairavgarh Batik Revival
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#context"
            className="hover:text-stone-900 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Provenance
          </a>
          <a
            href="#three-pillars"
            className="hover:text-stone-900 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            3 Pillars
          </a>
          <a
            href="#chemistry"
            className="hover:text-stone-900 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Plant Chemistry
          </a>
          <a
            href="#prototypes"
            className="hover:text-stone-900 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Prototypes
          </a>
          <a
            href="#transformation"
            className="hover:text-stone-900 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Impact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleAudio}
            title={isAudioActive ? "Mute workshop ambiance" : "Play subtle artisan soundscape"}
            aria-label={isAudioActive ? "Mute craft audio" : "Play craft audio"}
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-[#A44226]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onToggleViewMode}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#A44226] hover:bg-[#8B351E] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {viewMode === 'case-study' ? (
              <>
                <Presentation className="w-3.5 h-3.5" />
                <span>Presentation Deck</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Case Study</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
