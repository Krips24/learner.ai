"use client";

import { useState } from "react";

export default function UploadTest() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload</button>

      {url && <p>Uploaded: {url}</p>}
    </div>
  );
}
