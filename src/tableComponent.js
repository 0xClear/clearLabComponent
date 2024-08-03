import React from "react";
export const Table=(props)=>{
    const {theaders, data, columns}= props;
    return <div>
        <table className="table" >
            <thead scope="col">
                <tr>
                    {
                        theaders.map(
                            (headerValue, headerIndex)=>{
                                return <th key={headerIndex} >{headerValue}</th>
                            }
                        )
                    }   
                </tr>    
            </thead>    
            <tbody>
                {
                    data.map(
                        (dataValue, dataIndex)=>{
                            return <tr key={dataIndex} >
                                {
                                    columns.map(
                                        (value, index)=>{
                                            return <td key={index} >{dataValue[value]}</td>
                                        }
                                    )
                                }    
                            </tr>
                        }
                    )
                }
            </tbody>
        </table>    
    </div>
}
