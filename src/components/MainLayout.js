import React from 'react'
import  {Outlet,Link} from 'react-router-dom';

function MainLayout(props) {
   // console.log("Main Layout component props",props);
  return (
    <div>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/restaruant/edit">Kayıt</Link> |{" "}
      <Link to="/restaruant/list">Liste</Link> |{" "}
     
    </nav>
    <Outlet/>
  </div>
  )
}

export default MainLayout