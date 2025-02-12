import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from 'lucide-react'

interface Summary {
  title: string;
  summary: string;
  mindMap: string;
  timestamp: string;
  videoId: string;
}

interface SummaryListProps {
  summaries: Summary[];
}

const SummaryList: React.FC<SummaryListProps> = ({ summaries }) => {
  return (
    <div className="mt-4 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
      {summaries.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              {item.videoId ? (
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/default.jpg`}
                  alt="Video thumbnail"
                  className="w-24 h-18 object-cover rounded"
                />
              ) : (
                <div className="w-24 h-18 bg-gray-200 flex items-center justify-center rounded">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">{item.summary}</p>
                <p className="text-xs text-gray-500">Saved on: {item.timestamp}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SummaryList