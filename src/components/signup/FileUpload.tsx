import React from 'react';

type FileProps = {
  fileText: File | undefined;
  setFileText: React.Dispatch<React.SetStateAction<File | undefined>>;
};

const FileUpload = ({ fileText, setFileText }: FileProps) => {
  const FILE_SIZE_MAX_LIMIT = 10 * 1024 * 1024;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(files.type)) {
      target.value = '';
      alert('PDF 또는 DOCX 파일만 업로드 가능합니다.');
      return;
    } else if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      alert('업로드 가능한 최대 용량은 10MB입니다. ');
      return;
    }
    setFileText(files);
  };
  return (
    <div className="relative">
      <label htmlFor="file-upload">
        <div className="border-[1px] border-[#D5D7D9] border-solid rounded h-10 w-[435px] px-3 py-2 truncate">
          {!fileText ? (
            <div className="absolute top-2 left-3 text-[#B1B3B5]">
              사업장등록증 제출 <span className="text-red-700">*</span>
            </div>
          ) : (
            fileText.name
          )}
        </div>
      </label>
      <input id="file-upload" type="file" name="file" accept=".pdf, .docx" onChange={onChange} />
    </div>
  );
};

export default FileUpload;
