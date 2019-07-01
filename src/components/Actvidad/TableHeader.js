import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Numero de visita</th>
                        </tr>
                    </thead>
                </table>
            </div>
                );
            }
        }
        
export default TableHeader;