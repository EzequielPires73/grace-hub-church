import { useState } from 'react';
import { ButtonSecondary } from '../buttons/button-secondary';

export function InputFile({onChange}: {onChange: (file: File) => void}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsHovered(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    for (const file of files) {
      // Aqui você pode realizar a lógica para manipular o upload do arquivo
      console.log('Arquivo:', file.name);
    }
    onChange(files[0]);
  };

  return (
    <div
      className={`border-2 border-dashed border-gray-400 rounded-lg p-8 text-center h-fit flex flex-col items-center ${
        isHovered ? 'bg-gray-100' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className="mb-4 text-sm font-medium">Arraste e solte seus arquivos aqui</p>
      <input
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        multiple
        id='fileInput'
      />
      <ButtonSecondary title='Selecionar arquivos' onClick={() => document.getElementById('fileInput').click()} />
    </div>
  );
};
