import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-[#2C254F] text-lg font-bold cursor-pointer">Forensik.ai</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="text-[#2C254F] cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/article">
              <span className="text-[#2C254F] cursor-pointer">Articles</span>
            </Link>
          </li>
          <li>
            <Link href="/detect">
              <span className="text-[#2C254F] cursor-pointer">Detect AI Content</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
