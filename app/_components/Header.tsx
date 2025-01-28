import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

async function Header() {
  const navigation = await Navigation();

  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        {navigation}
      </div>
    </header>
  );
}

export default Header;