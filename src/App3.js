function NumberList(props) {
    const myList=[
        {
            id:'1',
            name:'kante',
            club:'chelsea'
        },
        {
            id:'2',
            name:'mount',
            club:'chelsea'
        },
        {
            id:'3',
            name:'messi',
            club:'barcelona'
        }
    ];
    const listItems = myList.map((x,index)=>
    <li key = {index}>{x.club}</li>);
    return(
        <ul>{listItems}</ul>
    );
  }

  export default NumberList;