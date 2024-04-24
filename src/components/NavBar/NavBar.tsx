function NavBar({ children }: React.PropsWithChildren<{}>) {
  return (
    <nav className="grid grid-cols-3 items-center rounded-lg bg-indigo-800 p-4">
      {children}
    </nav>
  );
}

export default NavBar;
