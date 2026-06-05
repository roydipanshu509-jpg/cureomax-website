'use client'

export default function VoiceWidget() {
  return (
    <div
      id="elevenlabs-convai-widget"
      className="fixed bottom-6 right-6 z-50"
      aria-label="AI voice assistant"
    >
      <elevenlabs-convai agent-id="cureomax-agent" />
    </div>
  )
}
