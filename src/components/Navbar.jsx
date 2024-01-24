import BurgerButton from "./BurgerButton";

const Navbar = () => {
  return (
    <nav class="flex items-center w-full gap-4">
      <a href="/">
        <img src="/Sm.svg" alt="Icon" />
      </a>
      <section>
        <a
          class="flex p-4 justify-center items-center bg-gray-100 rounded-lg no-underline text-xs font-thin border border-[#222]"
          href="/participantes"
        >
          Participantes
        </a>
        <a
          class="flex p-4 justify-center items-center bg-[#222] rounded-lg no-underline text-xs font-thin border border-[#333] text-[#f8f8f8]"
          href="/"
        >
          Juegos
        </a>
        <BurgerButton />
      </section>
    </nav>
  );
};

export default Navbar;
