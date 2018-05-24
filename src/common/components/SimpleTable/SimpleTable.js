import React from 'react';
import classNames from'classnames';

import './SimpleTable.less';

const SimpleTable = ({ data }) => {
  const isData = data.length;
  const headers = isData && Object.keys(data[0]);

  return (
    <div className={ classNames('simple-table', { 'simple-table--no-data': !isData }) }>
      { 
        isData 
        ? (
          <table className="table table-striped">
            <thead>
              <tr>
                { 
                  headers.map((header, index) => {
                    return (<th key={index}>{header}</th>)
                  })
                }
              </tr>
            </thead>
            <tbody>
              { 
                data.map((rowData, indexRow) => {
                  return (
                    <tr key={indexRow}>
                      { 
                        headers.map((header, indexColumn) => {
                          return (
                            <td key={`${ indexRow }-${ indexColumn }`}>
                              { rowData[header] }
                            </td>
                          )
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        ) 
        : ('No data in table')  
      }
    </div>
  );
};

export { SimpleTable };