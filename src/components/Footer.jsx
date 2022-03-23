const date = new Date();

function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {date.getFullYear()} Sajana Wijesinghe
            </p>
        </footer>
    );
}

export default Footer;