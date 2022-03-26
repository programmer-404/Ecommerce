import './App.css';
import {Routes,Route,Switch, Outlet} from "react-router-dom"
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import AddAdmin from './pages/AddAdmin';
import AddBrand from './pages/Brand/AddBrand';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import BrandList from './pages/Brand/BrandList';
import EditBrand from './pages/Brand/EditBrand';

function App() {
  // const [Menu, setMenu] = useState([]);
  // const [menuHtml, setmenuHtml] = useState("")
  // useEffect(() => {
  //   async function initData() {
  //     // console.log("menu", menulist);
  //     window.expandDropDown=expandDropDown
  //     let menuhtml = await getMenu(menulist)
      
  //     // console.log("menuhtml------------------------------------------------------------------------", menuhtml);
  //     setmenuHtml(menuhtml)

  //   }
  //   initData();
  // }, []);

  // let getMenu = async (menu) => {
    
  //   let htmlstring = ""
  //   for(let i=0;i<menu.length;i++){
  //   htmlstring=htmlstring+await rendermenu(menu[i],i)
  // }
  
  // return htmlstring
  // }

  // const getchildhtml = async (children) => {
  //   return `<a href="${children.redirect}">${children.name}</a>`
  // }

  // async function rendermenu(ele,id) {
  //   let html2 = ""
  //   if (ele.child.length) {
  //     for (let i = 0; i < ele.child.length; i++) {
  //       let html3=""
  //       if(ele.child[i].child&&ele.child[i].child.length){
  //         html3 = html3 + await rendermenu(ele.child[i],i)
  //       }
  //       else{
  //         html3 = await getchildhtml(ele.child[i])
  //       }
  //       html2 = html2 + html3
  //     }
  //   }

  //   let html1 =
  //     ele.child.length ?
  //       `
  //         <button class="dropdown-btn" id="dropdown-btn-${id}" onclick="window.expandDropDown('dropdown-btn-${id}')" >
  //         ${ele.name}
  //         </button>
  //         <div class="dropdown-container">
  //           ${html2}
  //         </div>`
  //       :
  //       `<a href="${ele.redirect}">${ele.name}</a>`
  //   // console.log(html1);
  //   return html1;
  // }
  // async function expandDropDown (e) {
  //   // console.log("id of element selected", e)
  //   var dropdown = document.getElementById(e);

  //   dropdown.classList.toggle("active");
  //   var dropdownContent = dropdown.nextElementSibling;
  //   if (dropdownContent.style.display === "block") {
  //     dropdownContent.style.display = "none";
  //   } else {
  //     dropdownContent.style.display = "block";
  //   }
  // }

  return (
    <>
    
    
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/addadmin" element={<AddAdmin/>} />
          <Route path="/addbrand" element={<AddBrand/>} />
          <Route path="/brandlist" element={<BrandList/>} />
          <Route path="/editBrand" element={<EditBrand/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    {/* <div className="sidenav" dangerouslySetInnerHTML={{ __html: menuHtml }}>
      
    </div> */}
    </>

  );
}

export default App;
