import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Upload } from "lucide-react"

interface ContentTabsProps {
  activeTab: 'youtube' | 'pdf';
  setActiveTab: (tab: 'youtube' | 'pdf') => void;
  url: string;
  setUrl: (url: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContentTabs({
  activeTab,
  setActiveTab,
  url,
  setUrl,
  handleSubmit,
  isLoading,
  fileInputRef,
  handleFileUpload
}: ContentTabsProps) {

  return (
    <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as 'youtube' | 'pdf')} className="mb-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="youtube">YouTube</TabsTrigger>
        <TabsTrigger value="pdf">PDF</TabsTrigger>
      </TabsList>
      <TabsContent value="youtube">
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
      </TabsContent>
      <TabsContent value="pdf">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-grow"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload PDF
            </Button>
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
      </TabsContent>
    </Tabs>
  )
}
