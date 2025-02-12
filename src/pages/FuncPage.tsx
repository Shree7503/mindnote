import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Menu } from "lucide-react";
import SummaryList from "../components/funcpage/SummaryList";
import YouTubeTab from "../components/funcpage/YoutubeTab";
import PDFTab from "../components/funcpage/PDFTab";
import ContentCard from "../components/funcpage/ContentCard";
import SaveSummaryDialog from "../components/funcpage/SaveSummaryDialog";
import Navbar from "../components/funcpage/Navbar";
import axios from "axios";

interface Summary {
  title: string;
  summary: string;
  mindMap: string;
  timestamp: string;
  videoId: string;
}

export default function ContentSummarizerPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [mindMap, setMindMap] = useState("");
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("youtube");
  const [contentView, setContentView] = useState<"summary" | "mindmap">(
    "summary"
  );
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [summaryName, setSummaryName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios({
      method: "post",
      data: { link: url },
      url: "http://localhost:8000/video/process_video",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data.mindmap);
    const newSummary = response.data.summary;
    const newMindMap = response.data.mindmap;
    setSummary(newSummary);
    setMindMap(newMindMap);
    setIsLoading(false);
  };

  const handleSave = () => {
    if (summary && mindMap) {
      const timestamp = new Date().toLocaleString();
      const videoId = getYouTubeVideoId(url);
      const newSummary = {
        title: summaryName || `Summary ${summaries.length + 1}`,
        summary: summary,
        mindMap: mindMap,
        timestamp: timestamp,
        videoId: videoId,
      };
      setSummaries((prev) => [...prev, newSummary]);
      setIsSaveDialogOpen(false);
      setSummaryName("");
      toast.success("Your summary and mind map have been saved successfully.");
    } else {
      toast.error("Please generate a summary before saving.");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.success(`${file.name} has been uploaded successfully.`);
    }
  };

  const toggleContentView = () => {
    setContentView((prev) => (prev === "summary" ? "mindmap" : "summary"));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4 max-w-7xl">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-4">
              <Menu className="h-4 w-4 mr-2" />
              View All Summaries
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>All Summaries</SheetTitle>
            </SheetHeader>
            <SummaryList summaries={summaries} />
          </SheetContent>
        </Sheet>

        <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
          Content Summarizer
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="pdf">PDF</TabsTrigger>
          </TabsList>
          <TabsContent value="youtube">
            <YouTubeTab
              url={url}
              setUrl={setUrl}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </TabsContent>
          <TabsContent value="pdf">
            <PDFTab
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              fileInputRef={fileInputRef}
              handleFileUpload={handleFileUpload}
            />
          </TabsContent>
        </Tabs>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <ContentCard activeTab={activeTab} url={url} />
          </div>
          <div className="lg:w-1/2">
            <ContentCard
              activeTab={activeTab}
              contentView={contentView}
              toggleContentView={toggleContentView}
              summary={summary}
              mindMap={mindMap}
            />
            <div className="mt-4 flex justify-end">
              <SaveSummaryDialog
                isSaveDialogOpen={isSaveDialogOpen}
                setIsSaveDialogOpen={setIsSaveDialogOpen}
                summaryName={summaryName}
                setSummaryName={setSummaryName}
                handleSave={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getYouTubeVideoId(url: string): string {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}
