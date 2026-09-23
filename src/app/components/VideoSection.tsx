"use client";

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/video-player";

/**
 * Primeiro quadro do player.
 *
 * TODO(cliente): hoje é um recorte de `projeto-futuro.webp`, não um frame do
 * vídeo. Trocar por um quadro real de `video-player.mp4` assim que houver um.
 *
 * TODO(cliente): comprimir `video-player.mp4`. São 43MB — mesmo com
 * preload="none", quem aperta o play paga a conta. Uma versão 720p a ~2 Mbps
 * ficaria perto de 10MB.
 */
const VIDEO_POSTER = "/images/video-player-poster.webp";

export default function VideoSection() {
  return (
    <section className="flex items-center justify-center bg-terra-cream py-16 md:min-h-screen md:py-0">
      <div className="w-full max-w-5xl px-6">
        <h2 className="font-serif text-terra-dark text-3xl md:text-5xl text-center mb-10 md:mb-10">
          Reviva esse entardecer
        </h2>
        <VideoPlayer className="overflow-hidden rounded-sm border border-terra-dark/10 shadow-lg">
          {/*
            preload="none": o arquivo tem 43MB e só deve baixar quando alguém
            aperta o play. Até lá, quem segura a caixa é o poster.
          */}
          <VideoPlayerContent
            preload="none"
            poster={VIDEO_POSTER}
            playsInline
            src="/videos/video-player.mp4"
            className="aspect-video w-full bg-terra-dark object-cover"
          />
          <VideoPlayerControlBar>
            <VideoPlayerPlayButton />
            <VideoPlayerSeekBackwardButton />
            <VideoPlayerSeekForwardButton />
            <VideoPlayerTimeRange />
            <VideoPlayerTimeDisplay showDuration />
            <VideoPlayerMuteButton />
            <VideoPlayerVolumeRange />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </div>
    </section>
  );
}
