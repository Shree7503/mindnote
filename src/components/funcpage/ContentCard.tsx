import React, { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Youtube,
  FileText,
  BookOpen,
  GitBranch,
  SwitchCamera,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge as EdgeType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

interface ContentCardProps {
  activeTab: string;
  url?: string;
  contentView?: "summary" | "mindmap";
  toggleContentView?: () => void;
  summary?: string;
  mindMap?: string;
}

const initialNodes = [
  {
    "id": "start",
    "type": "input",
    "data": {
      "label": "Start"
    },
    "position": {
      "x": 250,
      "y": 0
    }
  },
  {
    "id": "authentication",
    "type": "default",
    "data": {
      "label": "Authentication"
    },
    "position": {
      "x": 250,
      "y": 100
    }
  },
  {
    "id": "validate-user",
    "type": "default",
    "data": {
      "label": "Validate User"
    },
    "position": {
      "x": 250,
      "y": 200
    }
  },
  {
    "id": "authorization",
    "type": "default",
    "data": {
      "label": "Authorization"
    },
    "position": {
      "x": 250,
      "y": 300
    }
  },
  {
    "id": "permissions",
    "type": "default",
    "data": {
      "label": "Permissions"
    },
    "position": {
      "x": 250,
      "y": 400
    }
  },
  {
    "id": "bcrypt",
    "type": "default",
    "data": {
      "label": "Bcrypt"
    },
    "position": {
      "x": 250,
      "y": 500
    }
  },
  {
    "id": "hash-password",
    "type": "default",
    "data": {
      "label": "Hash Password"
    },
    "position": {
      "x": 250,
      "y": 600
    }
  },
  {
    "id": "jwt",
    "type": "default",
    "data": {
      "label": "JWT"
    },
    "position": {
      "x": 250,
      "y": 700
    }
  },
  {
    "id": "store-data",
    "type": "default",
    "data": {
      "label": "Store Data"
    },
    "position": {
      "x": 250,
      "y": 800
    }
  },
  {
    "id": "end",
    "type": "output",
    "data": {
      "label": "End"
    },
    "position": {
      "x": 250,
      "y": 900
    }
  }
];
const initialEdges = [{
  "id": "start-authentication",
  "source": "start",
  "target": "authentication"
},
{
  "id": "authentication-validate-user",
  "source": "authentication",
  "target": "validate-user"
},
{
  "id": "validate-user-authorization",
  "source": "validate-user",
  "target": "authorization"
},
{
  "id": "authorization-permissions",
  "source": "authorization",
  "target": "permissions"
},
{
  "id": "permissions-bcrypt",
  "source": "permissions",
  "target": "bcrypt"
},
{
  "id": "bcrypt-hash-password",
  "source": "bcrypt",
  "target": "hash-password"
},
{
  "id": "hash-password-jwt",
  "source": "hash-password",
  "target": "jwt"
},
{
  "id": "jwt-store-data",
  "source": "jwt",
  "target": "store-data"
},
{
  "id": "store-data-end",
  "source": "store-data",
  "target": "end"
}];

const ContentCard: React.FC<ContentCardProps> = ({
  activeTab,
  url,
  contentView,
  toggleContentView,
  summary,
}) => {
  
  
  const [nodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | EdgeType) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  if (activeTab === "youtube" && !contentView) {
    return (
      <Card className="rounded-xl shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="flex items-center text-primary">
            <Youtube className="h-6 w-6 mr-2" />
            Video Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          {url ? (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
              <Youtube className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  if (activeTab === "pdf" && !contentView) {
    return (
      <Card className="rounded-xl shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="flex items-center text-primary">
            <FileText className="h-6 w-6 mr-2" />
            PDF Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
            <FileText className="h-16 w-16 text-gray-400" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-xl shadow-lg bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-primary">
          <div className="flex items-center">
            {contentView === "summary" ? (
              <BookOpen className="h-6 w-6 mr-2" />
            ) : (
              <GitBranch className="h-6 w-6 mr-2" />
            )}
            {contentView === "summary" ? "Content Summary" : "Mind Map"}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleContentView}
            className="flex items-center"
          >
            <SwitchCamera className="h-4 w-4 mr-2" />
            Switch to {contentView === "summary" ? "Mind Map" : "Summary"}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {contentView === "summary" ? (
          summary ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-sm max-w-none">
              {summary}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-500">Summary will appear here</p>
          )
        ) : (
          <div style={{ width: "100%", height: "400px" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Controls />
              <Background />
            </ReactFlow>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

function getYouTubeVideoId(url: string): string {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

export default ContentCard;
