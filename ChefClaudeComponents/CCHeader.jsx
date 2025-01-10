import claudeLogo from "/src/assets/claude.png"

export default function Header() {
    return (
        <header className="claude-header">
            <img className="claude-image" src={claudeLogo} alt="Chef Claude" />
            <h1 className="header-text">Chef Claude</h1>
        </header>
    )
}