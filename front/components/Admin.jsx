import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div
        style={{
            backgroundColor: "#e0dedf",
            height: "100%",
            position: "relative",
            left: "0px",
            padding: "25px",
            color: "#6b4856",
            fontSize: "15px"
        }}
    >
        <div>
            <br />

            <p style={{ fontWeight: "700" }}>ADMIN</p>
            <Link to="/admin/getOrders">
                <p style={{ color: "#6b4856" }}>Órdenes</p>
            </Link>
            <Link to="/addProducts">
                <p style={{ color: "#6b4856" }}>Agregar Variables</p>
            </Link>

            <Link to="/admin/getUsers">
                <p style={{ color: "#6b4856" }}>Usuarios</p>
            </Link>

            <Link to="/admin/newPunto">
                <p style={{ color: "#6b4856" }}>Puntos de Encuentro</p>
            </Link>
        </div>
    </div>
);