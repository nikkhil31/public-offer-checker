import React, { useState } from 'react'
import {
    AddBtn,
    BackIcon,
    Checkbox,
    CheckCircle,
    CheckIcon,
    Footer,
    Header,
    Panwraper,
    SubmitBtn,
} from './choosepan.elements'

const ChoosePan = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <Header>
                <BackIcon size={30} />
            </Header>
            <Panwraper>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
            </Panwraper>
            <Footer>
                <AddBtn />
                <SubmitBtn />
            </Footer>
        </>
    )
}

export default ChoosePan
