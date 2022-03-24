function Sidebar() {
  return (
    <aside className="p3 menuWidth overflow-auto" data-testid="siderbar">
      <p className="h2 greyBlue">⚡️ 1.4kW</p>
      <p className="darkgray mb2">Power draw</p>
      <p className="h2 greyBlue">☀️️ 5.8kW</p>
      <p className="darkgray mb2">Solar power production</p>
      <p className="h2 greyBlue">🔌️ 4.4kW</p>
      <p className="darkgray mb2">Fed into grid</p>
      <p
        className="darkgray h2 greyBlue cnum"
        data-testid="test1"
        id="crd1"
      ></p>
      <p className="darkgray mb2 ctitel">Total Cost</p>
      <p
        className="darkgray h2 greyBlue cnum"
        data-testid="test2"
        id="crd2"
      ></p>
      <p className="darkgray mb2 ctitel">Total Consumption</p>
      <p
        className="darkgray h2 greyBlue cnum"
        data-testid="test3"
        id="crd3"
      ></p>
      <p className="darkgray mb2 ctitel">Total Footprint</p>
    </aside>
  );
}

export default Sidebar;
