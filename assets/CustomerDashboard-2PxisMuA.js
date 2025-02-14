import{r as l,u as f,b as N,j as e,c as j}from"./index-BWStPa2h.js";import{F as w,a as v,b as S,c as P,d as n}from"./index-rN5PxlGS.js";import{u as k}from"./AuthChecker-BxEdAQ6N.js";import{M as C}from"./Model-CNCi-wLF.js";import{c as M,m as A}from"./createLucideIcon-BqLr22Er.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],I=M("RefreshCw",E),G=()=>{const[m,o]=l.useState(!1),{user:s,logout:R}=f(),[r,d]=l.useState([]),{setCartId:x,setStore:h}=N(),[p,z]=l.useState([{id:1,name:"SuperMart",distance:"2.5 km",category:"Grocery"},{id:2,name:"ElectroWorld",distance:"4 km",category:"Electronics"}]),[F,L]=l.useState(0),{redirectTo:c}=k(),g=s!=null&&s.ProfilePic?s.ProfilePic:"/public/default.png",b=()=>{c("/Scan")};l.useEffect(()=>{(async()=>{try{const{data:a}=await j.getPurchaseHistory();Array.isArray(a)?d(a):(console.error("Expected an array, but received:",a),d([]))}catch(a){console.error("Error fetching purchase history:",a),d([])}})()},[]);const u=()=>{o(!0)},i=()=>{o(!1)},y=(t,a)=>{localStorage.setItem("cart",t),localStorage.setItem("store",a),x(t),h(a),c("/Shopping-start")};return e.jsxs("div",{className:"min-h-screen text-gray-800 p-6 relative overflow-hidden",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 relative z-10",children:[e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-0",children:["Welcome, ",s==null?void 0:s.Name]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto justify-center md:justify-start",children:[e.jsxs("button",{onClick:b,className:"bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base",children:[e.jsx(w,{className:"mr-2"})," Scan Store QR"]}),e.jsxs("button",{className:"bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base",children:[e.jsx(v,{className:"mr-2"})," Nearby Stores"]}),e.jsxs("button",{className:"bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base",children:[e.jsx(S,{className:"mr-2"})," ",s==null?void 0:s.LoyaltyPoints," Points"]}),e.jsxs("button",{onClick:u,className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base",children:[e.jsx(P,{className:"mr-2"})," Edit Profile"]})]})]}),e.jsx("div",{className:"bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg mb-8 relative z-10",children:e.jsxs("div",{className:"flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[e.jsx("img",{src:g,alt:"Profile",className:"w-16 h-16 rounded-full border-2 border-purple-500"}),e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:s==null?void 0:s.Name}),e.jsx("p",{className:"text-gray-600",children:s==null?void 0:s.Email})]})]})}),e.jsxs("div",{className:"bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg mb-8 relative z-10",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6",children:"Recent Purchases 67a8922ebe086261dfe7f9a9"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"hidden md:table-header-group",children:e.jsxs("tr",{className:"border-b border-gray-300",children:[e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Date"}),e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Store"}),e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Amount"}),e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Items"}),e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Status"}),e.jsx("th",{className:"py-3 text-left text-gray-700",children:"Action"})]})}),e.jsx("tbody",{children:Array.isArray(r)&&r.length>0?r.map((t,a)=>e.jsxs("tr",{className:"border-b border-gray-200 hover:bg-gray-50 transition-colors flex flex-col md:table-row",children:[e.jsxs("td",{className:"py-2 md:py-3 text-gray-700",children:[e.jsx("span",{className:"font-semibold md:hidden",children:"Date: "}),t.Date]}),e.jsxs("td",{className:"py-2 md:py-3 text-gray-700",children:[e.jsx("span",{className:"font-semibold md:hidden",children:"Store: "}),t.Store]}),e.jsxs("td",{className:"py-2 md:py-3 text-gray-700",children:[e.jsx("span",{className:"font-semibold md:hidden",children:"Amount: "}),"₹",t.Amount]}),e.jsxs("td",{className:"py-2 md:py-3 text-gray-700",children:[e.jsx("span",{className:"font-semibold md:hidden",children:"Items: "}),t.Items.length]}),e.jsxs("td",{className:`py-2 md:py-3 ${t.Status==="Completed"?"text-green-600":"text-red-600"}`,children:[e.jsx("span",{className:"font-semibold md:hidden",children:"Status: "}),t.Status]}),e.jsx("td",{className:"py-2 md:py-3",children:t.Status==="unpaid"&&e.jsxs(A.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>y(t.cartId,t.storeId),className:"bg-red-500 hover:bg-red-600 text-white px-2 py-1 md:px-3 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow w-full md:w-auto",children:[e.jsx(I,{className:"mr-1"})," Restart"]})})]},a)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"text-center py-6 text-gray-600",children:"No transactions found"})})})]})})]}),e.jsxs("div",{className:"bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-8 relative z-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Nearby Stores"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(t=>e.jsxs("div",{className:"bg-white/30 backdrop-blur-lg border border-white/20 rounded-lg p-4 hover:shadow-xl transition-shadow",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:t.name}),e.jsxs("p",{className:"text-gray-600 text-sm mb-3",children:[t.distance," • ",t.category]}),e.jsx("button",{className:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full transition-colors",children:"View Store"})]},t.id))})]}),e.jsxs("div",{className:"bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-8 relative z-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Loyalty Rewards"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsxs("div",{className:"bg-purple-600 text-white p-6 rounded-lg flex-1 text-center shadow-lg",children:[e.jsxs("p",{className:"text-2xl font-bold",children:[s==null?void 0:s.LoyaltyPoints," Points"]}),e.jsx("p",{className:"text-sm",children:"Current Balance"})]}),e.jsxs("div",{className:"bg-teal-600 text-white p-6 rounded-lg flex-1 text-center shadow-lg",children:[e.jsx("p",{className:"text-2xl font-bold",children:"50 More Points"}),e.jsx("p",{className:"text-sm",children:"To Next Tier"})]})]})]}),e.jsxs("div",{className:"bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg relative z-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Notifications"}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"bg-white/30 backdrop-blur-lg p-4 rounded-lg flex items-center space-x-3 hover:bg-white/40 transition-colors",children:[e.jsx(n,{className:"text-purple-600"}),e.jsx("p",{className:"text-gray-700",children:"Order Confirmed: Tech Mart (₹ 120)"})]}),e.jsxs("li",{className:"bg-white/30 backdrop-blur-lg p-4 rounded-lg flex items-center space-x-3 hover:bg-white/40 transition-colors",children:[e.jsx(n,{className:"text-purple-600"}),e.jsx("p",{className:"text-gray-700",children:"New Reward Available!"})]})]})]}),e.jsx(C,{isOpen:m,onClose:i,title:"Edit Profile",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("input",{type:"text",value:s==null?void 0:s.Name,placeholder:"Name",className:"bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),e.jsx("input",{type:"text",value:s==null?void 0:s.PhoneNumber,placeholder:"Mobile Number",className:"bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),e.jsx("input",{type:"email",value:s==null?void 0:s.Address,placeholder:"Address",className:"bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),e.jsx("button",{onClick:()=>{alert("Profile updated!"),i()},className:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow",children:"Save Changes"})]})})]})};export{G as default};
