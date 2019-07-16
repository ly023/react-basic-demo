import React, {Component} from 'react'
import UseWindowSizeComp from './UseWindowSizeComp'
import TextInputWithFocusButton from './UseRefComp'
import UseComponentSizeComp from './UseComponentSizeComp'
import UseCallbackComp from './UseCallbackComp'
import UseMemoComp from './UseMemoComp'

export default class extends Component {

    render() {
        return (
            <div className="grid">
                <div className="box">
                    useState & useEffect demo：<UseWindowSizeComp/>
                </div>
                <div className="box">
                    useRef demo： <TextInputWithFocusButton/>
                </div>
                <div className="box">
                    useLayoutEffect：<UseComponentSizeComp/>
                </div>
                <div className="box">
                    useMemo：<UseMemoComp/>
                </div>
                <div className="box">
                    useCallback：<UseCallbackComp/>
                </div>
            </div>
        )
    }
}
