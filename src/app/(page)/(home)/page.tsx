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
      <header
        className="w-full flex items-center bg-no-repeat bg-cover  "
        style={{
          backgroundImage: "url('../assets/images/bg-header.svg')",
        }}
      >
        <div className="xl:w-[1200px] mr-auto ml-auto">
          {/* Phần bên trái */}
          <div className="inner-wrap flex">
            <div className="font-[700] text-[40px] text-[#fff]">TechJob</div>
            <ul className="flex">
              <li>Top Job</li>
              <li>Top Companies</li>
            </ul>
            <div>
              <a href="">Sign In / Login</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
