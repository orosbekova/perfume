import { useSelector } from "react-redux";

const Like = () => {
    const {user}=useSelector((s)=>s.add)
    return (
        <div>kjkm,
            {user.map((el)=>(
                <div key={el.id}>
                    <h1 className="text-white">
                        {el.name}
                    </h1>
                </div>
            ))}
            
        </div>
    );
};

export default Like;