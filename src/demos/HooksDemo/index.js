import React, {Component} from 'react'
import UseWindowSizeComp from './UseWindowSizeComp'
import TextInputWithFocusButton from './UseRefComp'
import UseComponentSizeComp from './UseComponentSizeComp'
import UseCallbackComp from './UseCallbackComp'
import UseMemoComp from './UseMemoComp'
import UseReducerComp from './UseReducerComp'
import UseContextComp from './UseContextComp'
import CustomHook from './CustomHook'

export default class extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
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
                    <div className="box">
                        useReducer：<UseReducerComp/>
                    </div>
                    <div className="box">
                        useContext：<UseContextComp/>
                    </div>
                </div>
                <div className="grid">
                    <div className="box">
                        自定义hook：<CustomHook/>
                    </div>
                </div>
            </>
        )
    }
}
