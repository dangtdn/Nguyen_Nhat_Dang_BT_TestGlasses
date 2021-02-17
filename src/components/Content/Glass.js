import React, { Component } from 'react'

export default class Glass extends Component {

    render() {
        
        let {itemGlasses} = this.props

        return (
            <div
                className='col-2 d-flex align-items-center'
                style={{cursor:'pointer'}}
                onClick={() => {
                    this.props.changeGlasses(itemGlasses.id)
                }}>
                <img
                    className='w-100'
                    src={`./glassesImage/g${itemGlasses.id}.jpg`}
                />
            </div>
        )
    }
}
