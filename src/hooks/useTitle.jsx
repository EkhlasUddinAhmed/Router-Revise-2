import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}-Revise-2`
    },[title]);
};

export default useTitle;