type SidebarItem = {
  label: string;
  id: number;
};

type SidebarProps = {
  items: SidebarItem[];
};

function Sidebar({ items }: SidebarProps) {
  return (
    <aside>
      <h2>B2B Admin</h2>
      <nav>
        {items.map((item, index) => (
          <p key={item.id}>{item.label}</p>
        ))}
      </nav>
    </aside>
  );
}
export default Sidebar;
