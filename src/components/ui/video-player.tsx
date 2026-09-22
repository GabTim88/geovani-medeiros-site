"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type VideoHTMLAttributes,
} from "react";

type VideoPlayerState = {
  videoRef: React.RefObject<HTMLVideoElement>;
  playing: boolean;
  muted: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  toggleMute: () => void;
  seekBy: (seconds: number) => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
};

const VideoPlayerContext = createContext<VideoPlayerState | null>(null);

function useVideoPlayer() {
  const ctx = useContext(VideoPlayerContext);
  if (!ctx) {
    throw new Error("VideoPlayer.* deve ser usado dentro de <VideoPlayer>");
  }
  return ctx;
}

export function VideoPlayer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onDurationChange = () => setDuration(video.duration || 0);
    const onVolumeChange = () => {
      setMuted(video.muted);
      setVolumeState(video.volume);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onDurationChange);
    video.addEventListener("durationchange", onDurationChange);
    video.addEventListener("volumechange", onVolumeChange);

    // Se os metadados já tiverem carregado antes deste efeito se inscrever
    // (vídeo em cache, montagem tardia), os eventos acima nunca disparam e o
    // relógio fica parado em 0:00 para sempre — sincroniza o estado inicial
    // direto do elemento para cobrir essa corrida.
    if (video.readyState >= 1) {
      setDuration(video.duration || 0);
      setCurrentTime(video.currentTime);
    }
    setPlaying(!video.paused);
    setMuted(video.muted);
    setVolumeState(video.volume);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onDurationChange);
      video.removeEventListener("durationchange", onDurationChange);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  };

  const seekBy = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(
      Math.max(video.currentTime + seconds, 0),
      video.duration || Infinity
    );
  };

  const seekTo = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
  };

  const setVolume = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = value;
    video.muted = value === 0;
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        videoRef,
        playing,
        muted,
        volume,
        currentTime,
        duration,
        togglePlay,
        toggleMute,
        seekBy,
        seekTo,
        setVolume,
      }}
    >
      <div className={className}>{children}</div>
    </VideoPlayerContext.Provider>
  );
}

export function VideoPlayerContent(
  props: VideoHTMLAttributes<HTMLVideoElement>
) {
  const { videoRef } = useVideoPlayer();
  return <video ref={videoRef} {...props} />;
}

export function VideoPlayerControlBar({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={
        className ?? "flex items-center gap-2 bg-terra-dark px-4 py-3"
      }
    >
      {children}
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="p-1.5 text-terra-cream/80 transition-colors hover:text-terra-gold"
    >
      {children}
    </button>
  );
}

export function VideoPlayerPlayButton() {
  const { playing, togglePlay } = useVideoPlayer();
  return (
    <ControlButton
      label={playing ? "Pausar" : "Reproduzir"}
      onClick={togglePlay}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="5" width="4" height="14" />
          <rect x="14" y="5" width="4" height="14" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </ControlButton>
  );
}

export function VideoPlayerSeekBackwardButton() {
  const { seekBy } = useVideoPlayer();
  return (
    <ControlButton label="Voltar 10 segundos" onClick={() => seekBy(-10)}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
      </svg>
    </ControlButton>
  );
}

export function VideoPlayerSeekForwardButton() {
  const { seekBy } = useVideoPlayer();
  return (
    <ControlButton label="Avançar 10 segundos" onClick={() => seekBy(10)}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        transform="scale(-1,1)"
      >
        <path d="M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
      </svg>
    </ControlButton>
  );
}

export function VideoPlayerTimeRange() {
  const { currentTime, duration, seekTo } = useVideoPlayer();
  return (
    <input
      type="range"
      min={0}
      max={duration || 0}
      step={0.1}
      value={currentTime}
      onChange={(e) => seekTo(Number(e.target.value))}
      aria-label="Progresso do vídeo"
      className="h-1 flex-1 cursor-pointer accent-terra-gold"
    />
  );
}

export function VideoPlayerTimeDisplay({
  showDuration,
}: {
  showDuration?: boolean;
}) {
  const { currentTime, duration } = useVideoPlayer();
  const format = (t: number) => {
    if (!Number.isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <span className="whitespace-nowrap px-1 text-xs tabular-nums text-terra-cream/70">
      {format(currentTime)}
      {showDuration ? ` / ${format(duration)}` : null}
    </span>
  );
}

export function VideoPlayerMuteButton() {
  const { muted, toggleMute } = useVideoPlayer();
  return (
    <ControlButton
      label={muted ? "Ativar som" : "Silenciar"}
      onClick={toggleMute}
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 12A4.5 4.5 0 0 0 14 8v1.79l2.48 2.48c.01-.09.02-.18.02-.27zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
      )}
    </ControlButton>
  );
}

export function VideoPlayerVolumeRange() {
  const { volume, muted, setVolume } = useVideoPlayer();
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.05}
      value={muted ? 0 : volume}
      onChange={(e) => setVolume(Number(e.target.value))}
      aria-label="Volume"
      className="h-1 w-20 cursor-pointer accent-terra-gold"
    />
  );
}
