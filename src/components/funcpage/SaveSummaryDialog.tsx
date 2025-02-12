import React from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save } from 'lucide-react'

interface SaveSummaryDialogProps {
  isSaveDialogOpen: boolean;
  setIsSaveDialogOpen: (isOpen: boolean) => void;
  summaryName: string;
  setSummaryName: (name: string) => void;
  handleSave: () => void;
}

const SaveSummaryDialog: React.FC<SaveSummaryDialogProps> = ({
  isSaveDialogOpen,
  setIsSaveDialogOpen,
  summaryName,
  setSummaryName,
  handleSave
}) => {
  return (
    <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Save Summary
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Summary</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={summaryName}
              onChange={(e) => setSummaryName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Time</Label>
            <div className="col-span-3">{new Date().toLocaleString()}</div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SaveSummaryDialog