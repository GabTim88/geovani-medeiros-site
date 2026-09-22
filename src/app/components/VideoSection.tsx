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

export default function VideoSection() {
  return (
    <section className="flex items-center justify-center bg-terra-cream py-16 md:min-h-screen md:py-0">
      <div className="w-full max-w-5xl px-6">
        <h2 className="font-serif text-terra-dark text-3xl md:text-5xl text-center mb-10">
          Reviva esse entardecer
        </h2>
        <VideoPlayer className="overflow-hidden rounded-sm border border-terra-dark/10 shadow-lg">
          <VideoPlayerContent
            preload="auto"
            playsInline
            src="/videos/video-player.mp4"
            className="aspect-video w-full bg-terra-dark"
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
