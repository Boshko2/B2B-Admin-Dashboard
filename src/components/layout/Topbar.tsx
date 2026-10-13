
type TopbarProps = {
    title: string;
    buttonLabel: string;
}

function Topbar({title, buttonLabel}: TopbarProps) {
  return (
    <header>
      <h1>{title}</h1>
         <p>
            Welcome to the B2B Admin dashboard. Here you can manage your
            organization, view member details, and handle billing information.
            Use the sidebar to navigate throough different sections of the
            dashboard.
          </p>
      <button>{buttonLabel}</button>
    </header>
  );
}

export default Topbar;
