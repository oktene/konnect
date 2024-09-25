const Header = () => {
    return (
      <div className="bg-red-600 p-4 text-white flex justify-between items-center">
        <h1>Lucas França | CONTERP</h1>
        <button onClick={() => console.log('Logout')}>Sair</button>
      </div>
    );
  };
  
  export default Header;