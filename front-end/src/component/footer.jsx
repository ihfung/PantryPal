import '../style/footer.scss';

export default function Footer() {
  return (
    <div className="footer container">
      <p>&copy; 2024 PantryPal. All rights reserved.</p>
      <p>
        Follow us on:
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </div>
  );
}
