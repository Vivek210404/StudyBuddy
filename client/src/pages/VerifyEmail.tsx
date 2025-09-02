import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export default function VerifyEmail() {
  const { token } = useParams<{ token: string }>();   // 👈 type safe param
  const [message, setMessage] = useState<string>("Verifying...");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(`${API_URL}/api/auth/verifyEmail/${token}`);
        const data = await res.json();
        if (res.ok) {
          setMessage("✅ Email verified successfully! You can now login.");
        } else {
          setMessage(`❌ Verification failed: ${data.message}`);
        }
      } catch (err) {
        setMessage("❌ Something went wrong");
      }
    };
    if (token) verify();
  }, [token]);

  return <h2>{message}</h2>;
}
