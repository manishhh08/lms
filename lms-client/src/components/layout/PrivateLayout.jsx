// import React from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import Sidebar from "./Sidebar";
// import { Col, Container, Row } from "react-bootstrap";
// import Auth from "../../auth/Auth";

// const PrivateLayout = () => {
//   return (
//     <Auth>
//       <Container fluid className="p-0">
//         <Row className="g-0 min-vh-100">
//           {/* Sidebar */}
//           <Col xs={3}>
//             <Sidebar />
//           </Col>
//           {/* Main section */}
//           <Col xs={9} className="d-flex flex-column min-vh-100">
//             <Header />
//             <main
//               className="flex-grow-1 overflow-auto "
//               // style={{ maxHeight: "500px" }}
//             >
//               <Outlet />
//             </main>
//             <Footer />
//           </Col>
//         </Row>
//       </Container>
//     </Auth>
//   );
// };

// export default PrivateLayout;

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Auth from "../../auth/Auth";

const PrivateLayout = () => {
  return (
    <Auth>
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Sidebar */}
          <Col xs={3} className=" min-vh-100 d-flex flex-column">
            <Sidebar />
          </Col>

          {/* Main section */}
          <Col xs={9} className="d-flex flex-column vh-100">
            {/* Header at top */}
            <div className="flex-shrink-0">
              <Header />
            </div>

            {/* Main content scrollable */}
            <main className="flex-grow-1 overflow-auto">
              <Outlet />
            </main>

            {/* Footer sticky at bottom */}
            <div className="flex-shrink-0">
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </Auth>
  );
};

export default PrivateLayout;
