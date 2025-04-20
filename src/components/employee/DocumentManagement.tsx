
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Upload, File } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}

// Mock data
const companyDocuments: Document[] = [
  { id: "1", name: "Employee Handbook", type: "PDF", uploadDate: "2025-01-15", size: "2.4 MB" },
  { id: "2", name: "Benefits Guide", type: "PDF", uploadDate: "2025-01-15", size: "1.8 MB" },
  { id: "3", name: "Company Policies", type: "PDF", uploadDate: "2025-02-20", size: "3.2 MB" },
  { id: "4", name: "Tax Forms", type: "PDF", uploadDate: "2025-03-10", size: "1.5 MB" },
  { id: "5", name: "Org Chart", type: "PNG", uploadDate: "2025-03-12", size: "850 KB" },
];

const personalDocuments: Document[] = [
  { id: "1", name: "Offer Letter", type: "PDF", uploadDate: "2024-12-01", size: "750 KB" },
  { id: "2", name: "ID Proof", type: "PDF", uploadDate: "2024-12-05", size: "1.2 MB" },
  { id: "3", name: "Tax Declaration", type: "PDF", uploadDate: "2025-01-10", size: "980 KB" },
];

export function DocumentManagement() {
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDownload = (document: Document) => {
    toast({
      title: "Download Started",
      description: `Downloading ${document.name}...`,
    });
    // In a real app, this would trigger a download
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Complete",
            description: `${file.name} has been uploaded successfully.`,
          });
          return 0;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="company">
        <TabsList>
          <TabsTrigger value="company">Company Documents</TabsTrigger>
          <TabsTrigger value="personal">Personal Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="company" className="space-y-4 mt-4">
          {companyDocuments.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{doc.type}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.size}</span>
                        <span className="mx-2">•</span>
                        <span>Updated on {doc.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleDownload(doc)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="personal" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">My Documents</CardTitle>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="sr-only"
                    onChange={handleUpload}
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer" asChild>
                      <span>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Document
                      </span>
                    </Button>
                  </label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isUploading && (
                <div className="mb-4">
                  <p className="text-sm mb-1">Uploading document...</p>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
              
              {personalDocuments.length === 0 ? (
                <div className="text-center py-8">
                  <File className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No documents uploaded yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {personalDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            {doc.type} • {doc.size} • Uploaded on {doc.uploadDate}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDownload(doc)}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
