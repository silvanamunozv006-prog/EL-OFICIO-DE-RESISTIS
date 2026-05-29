import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle, Headphones } from 'lucide-react';
import { RecyclerProfile } from '../types';

interface AudioPlayerProps {
  profile: RecyclerProfile;
}

export default function AudioPlayer({ profile }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [useSynth, setUseSynth] = useState(true); // Default to our high fidelity ambient synth for offline reliability!
  
  const timerRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Total seconds calculation from string like "2:15"
  const parseDuration = (dur: string) => {
    const parts = dur.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  };

  const totalSecondLength = parseDuration(profile.audioDuration || '2:00');

  // Ambient synth player to generate nice, reassuring analog breeze and hums representing Buga's wind and steel
  const startSynth = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate a warm organic drone (110Hz or 55Hz - base A Note)
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      // Slight pitch drift representing physical movement
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(112, ctx.currentTime + totalSecondLength);

      // Low pass filter to make it very soft and rumble-like
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(150, ctx.currentTime);

      gainNode.gain.setValueAtTime(isMuted ? 0 : volume * 0.05, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      
      oscRef.current = osc;
      gainNodeRef.current = gainNode;
    } catch (e) {
      console.warn('Synth failed to start', e);
    }
  };

  const stopSynth = () => {
    try {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
    } catch (e) {
      console.warn('Synth failed to stop', e);
    }
  };

  // Handle play toggle
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSynth();
    } else {
      setIsPlaying(true);
      if (useSynth) {
        startSynth();
      }
    }
  };

  // Adjust synthesizer gain when volume or mute state changes
  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      const targetGain = isMuted ? 0 : volume * 0.05;
      gainNodeRef.current.gain.setTargetAtTime(targetGain, audioContextRef.current.currentTime, 0.1);
    }
  }, [volume, isMuted]);

  // Audio timer emulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSecondLength) {
            setIsPlaying(false);
            stopSynth();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSecondLength]);

  // Cleanup synth on unmount
  useEffect(() => {
    return () => {
      stopSynth();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = parseInt(e.target.value);
    setCurrentTime(nextVal);
  };

  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 relative overflow-hidden transition-all shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Profile info inside player */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative group flex-shrink-0">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-14 h-14 rounded-full object-cover border-2 border-secondary/20 grayscale group-hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            {isPlaying && (
              <span className="absolute -bottom-1 -right-1 bg-secondary text-white rounded-full p-1 shadow-sm flex items-center justify-center animate-pulse">
                <Headphones size={12} className="animate-spin duration-3000" />
              </span>
            )}
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary block">Testimonio Oral</span>
            <h4 className="font-display text-lg font-bold text-primary">{profile.name}</h4>
            <p className="text-xs text-on-surface-variant italic">{profile.role}</p>
          </div>
        </div>

        {/* Playback Controls & Waveform */}
        <div className="flex-1 w-full flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <button 
              id={`play-btn-${profile.id}`}
              onClick={togglePlay}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 text-white ${
                isPlaying ? 'bg-primary shadow-sm hover:bg-primary/95' : 'bg-secondary hover:bg-secondary/95 shadow-sm'
              }`}
              title={isPlaying ? 'Pausar testimonio' : 'Escuchar testimonio'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>

            {/* Simulated interactive audio wave */}
            <div className="flex-1 flex items-end justify-between h-10 px-2 select-none">
              {Array.from({ length: 32 }).map((_, i) => {
                // Wave height math based on dynamic indices + random drift if playing
                const waveHeightBase = Math.abs(Math.sin(i * 0.2)) * 60 + 10;
                const waveHeightPlaying = isPlaying 
                  ? Math.max(10, waveHeightBase + (Math.random() * 20 - 10))
                  : waveHeightBase * 0.4;
                const progressPercent = (currentTime / totalSecondLength) * 100;
                const isPassed = (i / 32) * 100 <= progressPercent;

                return (
                  <div
                    key={i}
                    className={`w-[2px] transition-all duration-250 ${
                      isPassed ? 'bg-secondary' : 'bg-outline-variant/50'
                    } ${isPlaying ? 'm-[1px]' : ''}`}
                    style={{ height: `${waveHeightPlaying}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Time & seekbar */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-on-surface-variant select-none w-10">
              {formatTime(currentTime)}
            </span>
            <input 
              type="range" 
              min={0} 
              max={totalSecondLength} 
              value={currentTime} 
              onChange={handleScrubChange}
              className="flex-1 accent-secondary h-1 rounded-lg bg-surface-container cursor-pointer"
            />
            <span className="font-mono text-xs text-on-surface-variant select-none w-10 text-right">
              {profile.audioDuration}
            </span>
          </div>
        </div>

        {/* Volume Controls & Source Badge */}
        <div className="flex items-center gap-4 self-stretch md:self-auto justify-between border-t border-outline-variant/10 md:border-none pt-2 md:pt-0">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="text-on-surface-variant hover:text-secondary transition-all"
              title={isMuted ? 'Quitar silencio' : 'Silenciar'}
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input 
              type="range" 
              min={0} 
              max={1} 
              step={0.1}
              value={isMuted ? 0 : volume} 
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-16 accent-secondary h-1 rounded-lg bg-surface-container cursor-pointer"
            />
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[9px] font-mono uppercase bg-primary-container text-on-primary-container px-2 py-0.5 rounded tracking-wider">
              {useSynth ? 'Ambiente Realista (Synth)' : 'Enlace MP3'}
            </span>
            {isPlaying && (
              <span className="text-[9px] text-green-700 font-mono mt-1 animate-pulse">
                Generando ecos de calle Buga...
              </span>
            )}
          </div>
        </div>

      </div>

      {isPlaying && (
        <div className="mt-4 text-xs font-serif italic text-primary border-l-2 border-secondary pl-3 animate-fade-in text-justify">
          "{profile.quote}"
        </div>
      )}
    </div>
  );
}
