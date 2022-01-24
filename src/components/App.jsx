import { Component } from 'react';
import { fetchPicsApi } from './services/fetchApi';
import Gallery from './Gallery/Gallery';

import Form from './Form/Form';

const App = () => {
  return Form();
};

// class App extends Component {
//   state = {
//     page: 1,
//     filter: 'cat',
//     pics: [],
//   };
//   componentDidMount() {
//     this.fetchImages();
//   }
//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.filter !== this.state.filter
//     ) {
//       this.fetchImages();
//     }
//   }
//   fetchImages = async () => {
//     const { filter, page } = this.state;
//     const time = setTimeout(async () => {
//       const pics = await fetchPicsApi(filter, page);
//       this.setState({ pics });
//       clearTimeout(time);
//     }, 500);
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.fetchImages();
//     this.setState({ page: 1 });
//   };
//   handleChange = e => {
//     this.setState({ filter: e.target.value });
//   };
//   render() {
//     const { pics, page, filter } = this.state;
//     const { handleSubmit, handleChange } = this;
//     return (
//       <>
//         {/* <p>Hello world!</p>
//         <input
//           type="text"
//           value={filter}
//           onChange={handleChange}
//           placeholder="Введіть назву картинки"
//         /> */}
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={filter} onChange={handleChange} placeholder='Введіть назву картинки'/>
//           <button type='submit' >Search</button>
//         </form>
//         <Gallery pics={pics} />
//         <button
//           type="button"
//           disabled={page === 1 ? true : false}
//           onClick={() => {
//             if (page <= 1) {
//               return;
//             }
//             this.setState({ page: page - 1 });
//           }}
//         >
//           Prev
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             this.setState({ page: page + 1 });
//           }}
//         >
//           Next
//         </button>
//       </>
//     );
//   }
// }

export default App;
