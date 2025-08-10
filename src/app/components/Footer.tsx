export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-10 w-full">
      <div className=" container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-1">
        <p className="text-sm font-mont">
          © 2025 Pokédex App. All rights reserved.
        </p>
        <p className="text-sm mt-2 sm:mt-0 font-mont">
          Built by Aqua using{" "}
          <a
            href="https://nextjs.org"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://pokeapi.co/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            PokéAPI
          </a>
        </p>
      </div>
    </footer>
  );
}
