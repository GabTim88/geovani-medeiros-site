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
 * vídeo. Com o arquivo novo em `video-player.mp4` (1920x1080, 1min09) o poster
 * continua sendo de outra imagem — trocar por um quadro real do vídeo.
 *
 * TODO(cliente): o arquivo novo caiu de 43MB para 27,6MB, mas ainda é pesado
 * para 1min09. Uma versão 1080p a ~4 Mbps ficaria perto de 8MB. O `moov` já
 * está no início do arquivo, então o play começa sem esperar o download todo.
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
            preload="none": o arquivo tem 27,6MB e só deve baixar quando alguém
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
