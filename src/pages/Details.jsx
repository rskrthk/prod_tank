import { useLocation } from "react-router-dom";

export default function Details(){
    const {title} = useLocation().state
    
    
    return <h4>Hi</h4>
}