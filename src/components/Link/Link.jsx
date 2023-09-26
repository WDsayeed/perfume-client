

const Link = ({item}) => {
        return (
                <li>
                    <a href={item.path}>{item.name}</a>    
                </li>
        );
};

export default Link;