import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const { token } = useParams<{ token: string }>();   // 👈 type safe param
  const [message, setMessage] = useState<string>("Verifying...");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/auth/verifyEmail/${token}`);
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
