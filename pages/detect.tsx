import { useState } from 'react';
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DetectPage() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);

    // Simulate processing
    setTimeout(() => {
      // Dummy result logic
      const isAiGenerated = Math.random() > 0.5 ? 'AI-generated' : 'Not AI-generated';
      setResult(isAiGenerated);
      setLoading(false);
    }, 2000); // Simulate a delay for processing
  };

  return (
    <div className="chat-container bg-gray-100">
        <Header/>
      <main className="chat-main mt-5">
        <div className="chat-box mt-5">
          <div className="message bot-message">
            <p>Upload an image to check if its AI-generated.</p>
          </div>
          {image && (
            <div className="message user-message">
              <p>Processing your image...</p>
            </div>
          )}
          {result && (
            <div className={`message result-message ${result === 'AI-generated' ? 'ai' : 'not-ai'}`}>
              <p>Result: {result}</p>
            </div>
          )}
          {loading && (
            <div className="message loading-message">
              <p>Loading...</p>
            </div>
          )}

<div className="upload-container">
          <input type="file" accept="image/*" onChange={handleFileChange} id="file-upload" />
          <label htmlFor="file-upload" className="upload-label">
            {image ? `Selected file: ${image.name}` : 'Choose an image'}
          </label>
          <button onClick={handleSubmit} disabled={loading}>Submit</button>
        </div>
        </div>
        
      </main>
     <Footer/>
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .header {
          background-color: #2C254F;
          color: white;
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
        }
        .chat-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        .chat-box {
          width: 100%;
          max-width: 800px;
          background-color: white;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .message {
          padding: 0.5rem;
          border-radius: 10px;
          max-width: 100%;
          word-wrap: break-word;
        }
        .bot-message {
          background-color: #e0e0e0;
          align-self: flex-start;
        }
        .user-message {
          background-color: #c0e0c0;
          align-self: flex-end;
        }
        .result-message.ai {
          background-color: #f8d7da;
          color: #721c24;
        }
        .result-message.not-ai {
          background-color: #d4edda;
          color: #155724;
        }
        .loading-message {
          background-color: #fff3cd;
          color: #856404;
          align-self: center;
        }
        
       .upload-container {
       margin-top:60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        #file-upload {
          display: none;
        }
        .upload-label {
          background-color: #2C254F;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          text-align: center;
          border: 2px solid #2C254F;
          font-size: 1rem;
        }
        .upload-label:hover {
          background-color: #1b1a40;
        }
        button {
          background-color: #2C254F;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #aaa;
        }
      `}</style>
    </div>
  );
}
