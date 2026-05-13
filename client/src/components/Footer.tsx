import "../styles/Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>המטבח של אמא ❤️</h3>
                    <p>המתכונים הכי טעימים בעולם, שנאספו באהבה על ידי הילדים.</p>
                </div>

                <div className="footer-section">
                    <h4>קישורים מהירים</h4>
                    <ul className="footer-links">
                        <li><a href="/">דף הבית</a></li>
                        <li><a href="/about">הסיפור שלנו</a></li>
                        {/* אפשר להוסיף כאן עוד קישורים בעתיד */}
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>בתאבון!</h4>
                    <p>תבשלו, תאכלו ותהנו מהרגעים המשותפים.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {currentYear} נבנה ע"י{" "}
                    <a href="mailto:avi605205@gmail.com">
                        אביגיל קליין
                    </a>
                </p>
            </div>
        </footer>
    );
}