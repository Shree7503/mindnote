import React from 'react'
import { Button } from "@/components/ui/button"
import { BookOpen, Home, Settings } from 'lucide-react'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">MindNote</span>
          </div>
          <div className="flex">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Home className="h-5 w-5 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation