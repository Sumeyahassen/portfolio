import { FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-700 dark:bg-gray-800 text-white py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/sumeyahassensumeya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>
        <a
          href="https://t.me/SumeyaHassen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="text-2xl hover:text-blue-400" />
        </a>
        <a
          href="https://www.tiktok.com/@sumeya_hassen_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-2xl hover:text-gray-500" />
        </a>
      </div>
      <p className="text-center text-sm text-gray-400 mt-6">
        © 2025 Sumeya Hassen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
