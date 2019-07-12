import React, {Component} from 'react'
import UseWindowSizeComp from './UseWindowSizeComp'
import TextInputWithFocusButton from './UseRefComp'
import UseComponentSizeComp from './UseComponentSizeComp'
// import UseCallbackComp from './UseCallbackComp'
// import UseCallbackComp1 from './UseCallbackComp1'
import UseMemoComp from './UseMemoComp'

export default class extends Component {

    render() {
        return (
            <>
                <div className="box">
                    useState & useEffect demo：<UseWindowSizeComp/>
                </div>
                <div className="box">
                    useRef demo： <TextInputWithFocusButton/>
                </div>
                <div className="box">
                    useLayoutEffect：<UseComponentSizeComp/>
                </div>
                {/*<div className="box">*/}
                {/*    useCallback：<UseCallbackComp/>*/}
                {/*</div>*/}
                {/*<div className="box">*/}
                {/*    useCallback：<UseCallbackComp1/>*/}
                {/*</div>*/}
                <div className="box">
                    useMemo：<UseMemoComp/>
                </div>
            </>
        )
    }
}
