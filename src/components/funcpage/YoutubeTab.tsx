import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'

interface YouTubeTabProps {
  url: string;
  setUrl: (url: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

const YouTubeTab: React.FC<YouTubeTabProps> = ({ url, setUrl, handleSubmit, isLoading }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="url"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </>
          ) : (
            'Summarize'
          )}
        </Button>
      </div>
    </form>
  )
}

export default YouTubeTab