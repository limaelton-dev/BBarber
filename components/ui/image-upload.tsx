"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageIcon, Upload } from "lucide-react";
import { HTMLAttributes, useState } from "react";

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
}

export function ImageUpload({ className, value, onChange, ...props }: ImageUploadProps) {
  const [preview, setPreview] = useState<string>(value || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange?.(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4",
        className
      )}
      {...props}
    >
      <div className="relative h-32 w-32">
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            <ImageIcon className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
      </div>
      
      <Button variant="outline" className="relative">
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Upload className="h-4 w-4 mr-2" />
        {preview ? "Trocar Foto" : "Carregar Foto"}
      </Button>
    </div>
  );
}