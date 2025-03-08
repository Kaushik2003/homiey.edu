import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PDFViewerProps {
  pdfUrl: any;
}



export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    link.click();
  };

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>View PDF</Button>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl w-full max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>PDF Preview</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowPdfPreview((prev) => !prev)}
            >
              {showPdfPreview ? "Hide PDF Preview" : "Show PDF Preview"}
            </Button>
          </div>
          {showPdfPreview && (
            <div className="w-full h-[70vh] overflow-y-auto border rounded-md">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="PDF Preview"
              />
            </div>
          )}
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button onClick={handleDownload}>Download</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
