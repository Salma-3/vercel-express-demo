// src/App.js
import React, { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import axios from "./axios";
import "./App.css";
import { ItemContext } from "./context/ItemContext";

const App = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios
            .get("/api/properties")
            .then((response) => setProperties(response.data))
            .catch((error) => console.error(error));
    }, []); // Empty dependency array to fetch properties once on mount

    const handleAddProperty = (newProperty) => {
        setProperties((prevProperties) => [...prevProperties, newProperty]);
    };

    const handleContactOwner = (contact) => {
        alert(`Contacting the owner of property is ${contact}`);
    };

    const handleDeleteProperty = (propertyId) => {
        axios
            .delete(`/api/properties/${propertyId}`)
            .then((response) => {
                // Filter out the deleted property from the state
                setProperties((prevProperties) =>
                    prevProperties.filter(
                        (property) => property._id !== propertyId
                    )
                );
            })
            .catch((error) => console.error(error));
    };

    return (
        <div style={{}}>
            <h1 className="gfg" style={{ margin: "10px 10px" }}>
                GFG
            </h1>
            <h1 style={{ marginTop: "10px" }}>Real Estate Management</h1>
            <ItemContext.Provider value={{properties, addProperty: handleAddProperty, removeProperty: handleDeleteProperty}}>
            <div>
                <AddProperty onAddProperty={handleAddProperty} />
                <PropertyList
                    onDeleteProperty={handleDeleteProperty}
                    properties={properties}
                    onContactOwner={handleContactOwner}
                />
            </div>
            </ItemContext.Provider>
            
        </div>
    );
};

export default App;
