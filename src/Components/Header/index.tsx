import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="bg-gray-200 p-3 flex flex-wrap">
        <NavLinks
          routs={[
            { id: 1, text: 'home', to: '/' },
            { id: 2, text: 'about', to: '/about' },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
