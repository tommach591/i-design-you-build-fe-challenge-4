export async function select(query) {
  let selectData = await fetch(
    `https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=${query}`,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiIxYTc5ZmYzMzVlMzM5OTU5ZWRlN2JlMWQiLCJpYXQiOjE2Njc5NDk1Njh9.f9V9ElPCksKaHljW2JOfw-C61oqs15NiFQJiTVEVN-Q",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return selectData;
}
