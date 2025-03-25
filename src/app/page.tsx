import NavigationMenu from "../components/layout/navigation-menu";

export default function Home() {
  return (
    <main className="bg-pattern">
      <div className="p-5">
        <NavigationMenu />
      </div>
      <section className="m-36 text-center justify-center">
        <h1 className="text-7xl">How will you be remembered?</h1>
        <div className="mt-4 text-lg text-[#738483]">
          <p>Words left unspoken </p>
          <p>Memories left forgotten</p>
          <p>Stories left untold</p>
        </div>
      </section>
    </main>
  );
}
