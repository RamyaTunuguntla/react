const CustomList = ({list}) =>{
    return (
    <ol>
    {list.map((eachItem) => (
        <li>{eachItem}</li>
    ))}
    
    </ol>
    );
};

export default CustomList;