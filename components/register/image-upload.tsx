"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageIcon, Upload } from "lucide-react";
import { HTMLAttributes, useState } from "react";

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
  onImageUpload?: (file: File) => void;
}

export function ImageUpload({ className, onImageUpload, ...props }: ImageUploadProps) {
  const [preview, setPreview] = useState<string>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload?.(file);
    }
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-4 hover:bg-muted/50 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        {preview ? (
          <div className="relative w-32 h-32">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : (
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
        )}
        <Button variant="outline" className="relative">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
          <Upload className="h-4 w-4 mr-2" />
          {preview ? "Trocar Imagem" : "Carregar Logo"}
        </Button>
      </div>
    </div>
  );
}