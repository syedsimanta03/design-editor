export async function sendOTP(email: string) {
  const resp = await fetch('/api/send_otp', {
    method: 'POST',
    body: JSON.stringify({
      email
    }),
  });
  const data = await resp.json();
  return data.methodId;
}
