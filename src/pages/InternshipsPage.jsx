import { useRef, useState } from 'react';
import { BriefcaseBusiness, Upload } from 'lucide-react';
import { Form, Title } from '../components/Common';

export default function InternshipsPage() {
  const fileInputRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleResume = (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setUploadError('Please upload a PDF file only.');
      setResume(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File must be 5MB or smaller.');
      setResume(null);
      return;
    }
    setUploadError('');
    setResume(file);
  };

  return (
    <section className="page split">
      <div>
        <Title title="Gain Absolute Marketplace Authority Through Technical Internships" />
        <p>Apply to active development, cloud, design and analytics internship roles. Approved candidates join live production feature teams.</p>
        {['Web Development Intern', 'Cloud & DevOps Intern', 'AI/ML Intern', 'UI/UX Design Intern'].map((role) => (
          <div key={role} className="job"><BriefcaseBusiness /> <b>{role}</b><span>Apply Now</span></div>
        ))}
      </div>
      <div className="upload" onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); handleResume(event.dataTransfer.files?.[0]); }}>
        <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" className="srOnly" onChange={(event) => handleResume(event.target.files?.[0])} />
        <button type="button" className="uploadBtn" onClick={() => fileInputRef.current?.click()} aria-label="Upload resume PDF">
          <Upload size={42} />
        </button>
        <h2>Submit Onboarding Request</h2>
        <p>Drag and drop your engineering resume here (PDF only, max 5MB)</p>
        {resume && <p className="uploadFileName">Selected: {resume.name}</p>}
        {uploadError && <p className="uploadError">{uploadError}</p>}
        <Form button="Submit Internship Application" />
      </div>
    </section>
  );
}
