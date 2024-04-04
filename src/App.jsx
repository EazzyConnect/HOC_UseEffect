import React, { useEffect, useState } from 'react';
import Card from './components/Card.jsx';
import Master from './hocComponent/Master';
import Child from './hocComponent/Child';


const App = () => {

  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    setLoading(true)
    try {
      let response = await fetch("https://660e66876ddfa2943b36a905.mockapi.io/react/user");
      let userData = await response.json();
      setResult(userData);
      console.log(userData);
      setLoading(false);

      // await fetch ("https://660e66876ddfa2943b36a905.mockapi.io/react/user")
      // .then((res)=>{
      //   const data = res.json();
      //   const newData = JSON.parse(data)
      //   setResult(data)
      //   console.log(data);
      // })

    } catch {
      (err) => {
        setLoading(false)
        return console.log(err);
      }
    }
  }

  // fetchData()

  return (
    <>
      <div>
        {result.length}

        {
          loading

            ?

            <h2>please wait...</h2>

            :

            <div style={{display: "flex", justifyContent: "space-between"}}>
              {
                result.map((user) => {
                  return (
                    <Card key={user.id} name={user.name} avatar={user.avatar} createdAt={user.createdAt} />
                  )
                }
                )
              }
            </div>

        }

      </div>
    </>
  )
};

// const App = () => {

//   // const res = () => {
//   //   return(
//   //     <>
//   //     <h1>This is result</h1>
//   //     </>
//   //   )
//   // };

//   const HOC = Master(Child);

//   return (
//     <>
//       <HOC />
//     </>
//   )
// };

export default App;
