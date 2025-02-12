import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Upload } from 'lucide-react'

interface PDFTabProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PDFTab: React.FC<PDFTabProps> = ({ handleSubmit, isLoading, fileInputRef, handleFileUpload }) => {
  return (
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
  )
}

export default PDFTab