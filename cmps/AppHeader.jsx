const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header">
            <Link to="/">
                <h3>TC</h3>
            </Link>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
        </header>
    )
}
