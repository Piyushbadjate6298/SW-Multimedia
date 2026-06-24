const apiBaseUrl = import.meta.env.VITE_API_URL || '';

export async function submitLead(payload) {
  const response = await fetch(`${apiBaseUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Lead submission failed');
  }

  return response.json();
}
