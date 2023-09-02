// import './App.css';
// import { useEffect, useState } from 'react';
// import React,{ json } from 'react';

// function App() {
//   const [name,setName]= useState({initialState:''});

//   const [datetime,setDatetime]= useState({initialState:''});
//   const [description,setDescription]=useState({initialState:''});
//   const [transactions,setTransactions]=useState({initialState:[]});
//   useEffect(()=>{
//     getTransactions().then(setTransactions);
//   },[]);

//   async function getTransactions()
//   {
//     const url=`${process.env.REACT_APP_API_URL}/transactions`;
//     const response =await fetch(url);
//     return await response.json();
//   }

//   function addNewTransaction(ev){
//     ev.preventDefault();
//       const url=process.env.REACT_APP_API_URL+'/transaction';
//       console.log(url); 
//       const price = name.split(' ')[0];
//       fetch(url,{
//         method:'POST',
//         headers: { 'Content-type' : 'application/json'},
//         body: JSON.stringify({
//           price,
//           name:name.substring(price.length+1),
//           description,
//           datetime,
//         })
//       }).then(response=>{
//         response.json().then(()=>{
//           setName({value:''});
//           setDatetime({value:''});
//           setDescription({value:''});
//           console.log('result',json);
//         });
//       });                            
//   }

//   let balance=0;
//   for(const transaction of transactions)
//   {
//     balance=balance+transaction.price;
//   }
//   // balance=balance.toFixed(2);
//   // const fraction =balance.split('.')[1];
//   // balance =balance.split('.')[0];

//   // React.useEffect(()=>{
//   //   let newBalance=0;
//   //   for(const transaction of transactions)
//   //   {
//   //     newBalance=newBalance+transaction.price;
//   //   }
//   //    setBalance(newBalance);
//   // },[transactions]);
//   return (
//      <main>
//         <h1>$900<span>.00</span></h1>
//         <form onSubmit={addNewTransaction} >
//           <div className='basic'>
//           <input type="text"
//                  value={name}
//                  onChange={ev=> setName(ev.target.value)}
//                  placeholder={'+200 new samsung tv'}
//                 />
//           <input type="datetime-local"
//                   value={datetime}
//                   onChange={ev=> setDatetime(ev.target.value)}/>
//           </div>
//           <div className='description'>
//           <input type="text"
//            value={description}
//            onChange={ev=> setDescription(ev.target.value)}
//            placeholder={'description'}/>
//           </div>
//           <button type='submit'>Add new transaction</button>
//         </form>
//         <div className='transactions'>
//           {transactions.length > 0 && transactions.map(transaction=>(
//             <div className='transaction'>
//               <div className='left'>
//                 <div className='name'>{transaction.name}</div>
//                 <div className='description'>{transaction.description}</div>
//               </div>
//               <div className='right'>
//                 <div className={"price "+(transaction.price<0? 'red':'green')}>
//                   {transaction.price}</div>
//                 <div className='datetime'>{transaction.datetime}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//      </main>
//   );
// }

// export default App;


// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [datetime, setDatetime] = useState('');
//   const [description, setDescription] = useState('');
//   const [transactions, setTransactions] = useState([]);
  
//   useEffect(() => {
//     getTransactions().then(setTransactions);
//   }, []);
  
//   async function getTransactions() {
//     const url = `${process.env.REACT_APP_API_URL}/transactions`;
//     const response = await fetch(url);
//     return await response.json();
//   }
  
//   function addNewTransaction(ev) {
//     ev.preventDefault();
//     const url = process.env.REACT_APP_API_URL + '/transaction';
//     console.log(url);
//     const price = name.split(' ')[0];
//     fetch(url, {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify({
//         price,
//         name: name.substring(price.length + 1),
//         description,
//         datetime,
//       }),
//     }).then(response => {
//       response.json().then(() => {
//         setName('');
//         setDatetime('');
//         setDescription('');
//       });
//     });
//   }
  
//   let balance = 0;
//   for (const transaction of transactions) {
//     balance = balance + transaction.price;
//   }

//   balance=balance.toFixed(2);
//   const fraction =balance.split('.')[1];
//   balance =balance.split('.')[0];

//   React.useEffect(()=>{
//     let newBalance=0;
//     for(const transaction of transactions)
//     {
//       newBalance=newBalance+transaction.price;
//     }
//      setBalance(newBalance);
//   },[transactions]);
  
//   return (
//     <main>
//       <h1>${balance}<span>.{fraction}</span></h1>
//       <form onSubmit={addNewTransaction}>
//         <div className='basic'>
//           <input type="text"
//             value={name}
//             onChange={ev => setName(ev.target.value)}
//             placeholder={'+200 new samsung tv'}
//           />
//           <input type="datetime-local"
//             value={datetime}
//             onChange={ev => setDatetime(ev.target.value)} />
//         </div>
//         <div className='description'>
//           <input type="text"
//             value={description}
//             onChange={ev => setDescription(ev.target.value)}
//             placeholder={'description'} />
//         </div>
//         <button type='submit'>Add new transaction</button>
//       </form>
//       <div className='transactions'>
//         {transactions.length > 0 && transactions.map(transaction => (
//           <div className='transaction' key={transaction.id}>
//             <div className='left'>
//               <div className='name'>{transaction.name}</div>
//               <div className='description'>{transaction.description}</div>
//             </div>
//             <div className='right'>
//               <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>
//                 {transaction.price}</div>
//               <div className='datetime'>{transaction.datetime}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default App;



import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0); // Initialize balance as a state
  
  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);
  
  async function getTransactions() {
    const url = `${process.env.REACT_APP_API_URL}/transactions`;
    const response = await fetch(url);
    return await response.json();
  }
  
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = parseFloat(name.split(' ')[0]); // Parse price as a float
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(name.indexOf(' ') + 1), // Corrected substring
        description,
        datetime,
      }),
    }).then(response => {
      response.json().then(() => {
        setName('');
        setDatetime('');
        setDescription('');
      });
    });
  }

  // Calculate the balance when transactions change
  useEffect(() => {
    let newBalance = 0;
    for (const transaction of transactions) {
      newBalance += parseFloat(transaction.price);
    }
    setBalance(newBalance.toFixed(2));
  }, [transactions]);
  
  return (
    <main>
      <h1>${balance}<span>.{balance.split('.')[1]}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung tv'}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
          />
        </div>
        <div className='description'>
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'}
          />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        {transactions.length > 0 &&
          transactions.map(transaction => (
            <div className='transaction' key={transaction.id}>
              <div className='left'>
                <div className='name'>{transaction.name}</div>
                <div className='description'>{transaction.description}</div>
              </div>
              <div className='right'>
                <div
                  className={"price " + (transaction.price < 0 ? 'red' : 'green')}
                >
                  {transaction.price}
                </div>
                <div className='datetime'>{transaction.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
