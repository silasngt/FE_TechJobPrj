export default function Home() {
  fetch('http://localhost:3001', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));
  return (
    <>
      <h3>Welcome to TechJob Project</h3>
    </>
  );
}
