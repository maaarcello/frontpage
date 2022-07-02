import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const default = {
//   className: "layout",
//   cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   rowHeight: 30
// }

const layouts = {};

const App = () => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      layouts={layouts}
    >
      <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
        <span className="text">1</span>
      </div>
      <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
        <span className="text">2</span>
      </div>
      <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
        <span className="text">3</span>
      </div>
      <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
        <span className="text">4</span>
      </div>
      <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
        <span className="text">5</span>
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default App;
