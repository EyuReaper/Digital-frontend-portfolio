import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className="footer footer-center  py-8 text-base-content p-4">
  <aside>
    <p>&copy; {new Date().getFullYear()} - Eyu G. All rights reserved.</p>
  </aside>
</footer>    

  );
};

export default Footer;
