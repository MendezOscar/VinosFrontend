import React, { Component } from 'react';

class ProductoTableHeader extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default ProductoTableHeader;