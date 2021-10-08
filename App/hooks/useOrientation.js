import { useEffect, useState } from "react"
import { Dimensions } from "react-native"

export default useOrientation = () =>{
    const [screenInfo, setScreenInfo] = useState(Dimensions.get('window'));

    useEffect(() => {
        const onChange = (result) =>{
            setScreenInfo(result.window);
        }

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    }, []);

    return {
        ...screenInfo,
        isPortrait: screenInfo.width < screenInfo.height
    }
}