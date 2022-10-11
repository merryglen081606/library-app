// import axios from "axios";



// export const getLibrarians = ({commit}) =>{
//     axios.get("http://172.16.4.182:5000/api/librarian/")
//     .then (response => {
//         commit('SET_LIBRARIANS',response.data);
//         console.log(response.)
//     })
   
// };

// export const AddLibrarianSubmit=({commit},{
//     Firstname,Middlename,Lastname,RegisterDate,Gender }) =>{
//     commit('ADD_LIBRARIAN',
//        { Firstname, Middlename, Lastname, RegisterDate, Gender });
//     }























// import axios from "axios"
// const API_URL = "http://172.16.4.182:5000/api/accounts/";


// export default{
//     async libbrarians({commit},{Secret}){
//         console.log("what",this.$axios);
//         return await axios({
//             method: "GET",
//             API_URL:'${this.$axios.defaults.API_URL}/librarian',

//         })
//             .then(res => {
//                 console.log(res);
//                 commit("SET_CUSTOMER", res.data.view);
//                 console.log("testCustomer", res.data.view);
//                 return res.data;
//             })
//             .catch(err => {
//                 console.log(err);
//             });

//     },
// }