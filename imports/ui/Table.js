import React from 'react';

export default Table = (props) =>{
  console.log("pro",props);
  let data = props.data.followers || [];
  console.log(data);
  const display = (data) => {
    return data.map((e,i) => {
      return <tr key={i}><td>{e.followername}</td><td>{e.follower_count}</td><td>{e.friends_count}</td></tr>
    });

  }

  return(
    <table className="table">
    <thead>
<tr>
    <th>Follower Name</th>
    <th>Follower Count</th>
    <th>Friends Count</th>
</tr>
    </thead>
    <tbody>{display(data)}</tbody>
    </table>
  )
}
