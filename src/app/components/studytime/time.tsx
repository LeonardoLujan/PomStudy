
import {AmtTime} from './studytime'


export default function TimeComponent({amount}: AmtTime ) {
    return(
        <div className="text-black">
            {amount} min
            

        </div>
    )

}